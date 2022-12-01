import axios from "axios";
import { useEffect, useState } from "react";
import toast, {Toaster} from 'react-hot-toast'

let Menu = () =>{

    const [ data, setData ] = useState([])
    const [ backupData, setBackupData ] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        onGetData()
    }, [])

    let onGetData = async() => {
        try {
            //  Metode1 : filter client side
            let response = await axios.get('http://localhost:5000/products')
            let responseCategory = await axios.get('http://localhost:5000/category')
            let newResponseFilter = response.data.filter(value => {
                return value.category === 0
            })
            setData(newResponseFilter)
            setBackupData(response.data)
            setCategory(responseCategory.data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return(
        <>
         <div className="flex px-20 pt-20">
            <div className="basis-1/6">
                <div>
                    <h1 className="my-fs-25 font-bold">
                        Drinks 
                    </h1>
                </div>
                {
                category.map((value, index) => {
                    return(
                        <div key={index} className="pt-2">{value}</div>
                    )
                        })
                }
            </div>
            <div className="basis-5/6">
                <div>
                    <h1 className="my-fs-30 font-bold">
                        Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pb-3">
                    <h1 className="my-fs-25 font-bold">
                        Drinks
                    </h1>
                </div>
                {/* Lists Products */}
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.map((value, index) => {
                            return(
                                <div key={index} className='flex items-center mt-3'>
                                    <div>
                                        <img src={value.image} style={{ width:'100px', height:'100px' }} className='rounded-full' />
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='my-fs-20 font-bold'>
                                            {value.name}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu