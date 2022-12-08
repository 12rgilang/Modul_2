import axios from "axios"

export default function Profile(props){
    return(
        <>
        <h1>
            page profile
        </h1>
        {
            props.dataProducts.map((value, index) => {
                return(
                    <>
                    <div>{value.name} <span>harganya {value.size[0].price}</span></div>
                    
                    </>
                )
            })
        }
        </>
    )
}

export const getServerSideProps = async() => {
    try {
        let res = await axios.get('http://localhost:5000/products')
        console.log(res.data)

        return{
            props: {
                dataProducts: res.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}