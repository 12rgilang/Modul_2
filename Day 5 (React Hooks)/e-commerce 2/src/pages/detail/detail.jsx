import axios from  'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"
import toast, { Toaster } from 'react-hot-toast'


let DetailProduct = () => {

    const productId = useParams()
    const selectSize = useRef()
    const selectTopping = useRef()
    const selectSugar = useRef()
    const selected = useRef()
    const [data, setData] = useState(null)
    const [sizeToShow, setSizeToShow] = useState(0)
    const [toppingToShow, setToppingToShow] = useState(0)
    const [sugarToShow, setSugarToShow] = useState(0)
    const [totalCart, setTotalCart] = useState(0)



    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:2023/products/${productId.id}`)
            console.log(response)
            setData(response.data)
        } catch (error) {
            
        }
    }

    let onSelectSize = () => {
        let indexSelectedSize =  selectSize.current.value
        console.log(indexSelectedSize)
        setSizeToShow(indexSelectedSize)
    }

    let onSelectTopping = () => {
        let indexSelectedTopping = selectTopping.current.value
        console.log(indexSelectedTopping)
        setToppingToShow(indexSelectedTopping)
    }

    let onSelectSugar = () => {
        let indexSelectedSugar = selectSugar.current.value
        console.log(indexSelectedSugar)
        setSugarToShow()
    }

    let onAddOrder = async() =>{
        try {

            let myToken

            if(localStorage.getItem('token')){
                myToken = parseInt(localStorage.getItem('token'))
            }else{
                myToken = localStorage.getItem('tokenUid')
            }

            let dataToSend = {
                productsId: data.id,
                indexSize: parseInt(selectSize.current.value),
                indexTopping: parseInt(selectTopping.current.value),
                indexSugar: parseInt(selectSugar.current.value),
                quantity: 1,
                userId: myToken
            }
            let checkExist = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart?productsId=${data.id}&userId=${myToken}`)

            if(checkExist.data.length === 0){
                let response = await axios.post(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart`, dataToSend)
                toast.success('Add to cart Success.')
                onGetTotalCarts()
            }else{
                let newQuantity = checkExist.data[0].quantity + 1
                let update = await axios.patch(`http:localhost:2023/cart/${checkExist.data[0].id}`, {quantitiy: newQuantity})
                toast.success('Update quantity Success.')
            }
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    let onGetTotalCarts = async() => {
        try {
           let myToken = localStorage.getItem('token') ? parseInt(localStorage.getItem('token')) : localStorage.getItem('tokenUid')

           if(myToken){
               let response = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart?userId=${myToken}`)
               setTotalCart(response.data.length)
           }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        onGetData()
        onGetTotalCarts()
    }, [])

    if(data === null){
        return(
            <div>
                in Proccess..
            </div>
        )
    }




    return(
        <>
        {/* jumbotron */}
        <div className="flex top-0 items-center px-20 pt-20 my-bg-main h-96 ">
           <div className="product flex basis-2/5 justify-center">
                <img src={data.image} className='rounded-full' style={{width: '200px', height: '200px'}} />
           </div>
           <div className="desc flex basis-3/5 justify-center">
               <div className="flex-col">
                <p className="my-fs-30 font-bold">{data.name}</p>
                <p className="my-ligh my-fs-20 font-semi-bold"> {data.size[sizeToShow].calories} Calories</p>
                <p className="my-ligh my-fs-20 font-semi-bold">Rp. {(data.size[sizeToShow].price).toLocaleString()}</p>
               </div>
           </div>
        </div>

        {/* select size */}
        <div className="parent-size flex mt-10 ml-5 h-screen">
            {/* left */}
            <div className="size my-fs-25 font-bold flex-col basis-2/5 ">
                <div className="border-b-2 pb-2 mt-3 flex" style={{ borderBottom: '3px solid silver' }}>
                Size options
                </div>
                <div className="option block flex my-fs-15  mt-1 items-center">
                <select ref={selectSize} onClick={onSelectSize} className="flex grow mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 lock w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        data.size.map((value, index) => {
                            return(
                                <option key={index} value={index}>{value.option}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>

            {/* right */}
            <div className="topping ml-5 my-fs-25 font-bold flex-col basis-3/5 pr-5">
                <div className="border-b-2 pb-2 mt-3 flex " style={{ borderBottom: '3px solid silver' }}>
                    Topping
                    </div>
                    <div className="option block flex my-fs-15 mt-1 items-center">
                    <select ref={selectTopping} onClick={onSelectTopping} className="flex grow mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 lock w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                        {
                            data.topping.map((value, index) => {
                                return(
                                    <option key={index} value={value}>{value}</option>)
                                })
                        }
                    </select>
                </div>
                {
                        data.sugar?
                        <>
                        <h1 className="my-fs-25 font-bold pb-2 mt-3" style={{ borderBottom: '3px solid silver' }}>
                        Sugar
                        </h1>
                        <select ref={selectSugar} onClick={onSelectSugar} id="countries" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {data.sugar.map((value, index) => {
                                return(
                                    <option value={index}>{value}</option>
                                )
                            })}
                        </select>
                            
                            </>
                            :
                            null
                    }

            </div>
        </div>

        {/* Button order */}
        <div className='flex justify-end '>
            {
                localStorage.getItem('token') || localStorage.getItem('tokenUid') ? 
                <div className="cart flex m-4 fixed bottom-16 border-black text-white font-bold rounded-full px-3 py-3 my-bg-dark  text-lg">
                <button onClick={onAddOrder} >
                    Add to order
                </button> 
                </div>
                :
                null
            }
        </div>

        {/* Footer */}
        <div className="bg fixed bottom-0 flex ">
            <div className="my-bg-main w-screen flex font-semibold items-center justify-evenly ">
                <div className="main-content text-white border-b-2 my-3">
                    <div className="top">
                        For Item availability
                    </div>
                    <div className="bottom">
                        Choose store
                    </div>
                </div>
                <div className="icons my-fs-30 ">
                    <BsFillHandbagFill /> {totalCart}
                </div>
            </div>
            <Toaster />
        </div>

        </>
    )
}

export default DetailProduct