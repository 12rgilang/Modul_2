import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Navigate } from 'react-router-dom';

let Activation = () => {

  const [isCode, setIsCode] = useState('')
  const [isActivate, setIsActivate] = useState(false)

  let activate = useRef()
  let username = useRef()

  useEffect(() => {
    GenerateCode()
  }, [])

  let GenerateCode = async() => {
    try {
      let activationNumber = Math.round(Math.random() * 99999)
      setIsCode(activationNumber)

    } catch (error) {
      toast.error(error.message)
    }
}

  let onActivate = async() => {
    try {
      
      let inputUsername = username.current.value
      let inputCode = activate.current.value

      let getUsername = await axios.get(`http://localhost:5000/users`)
      console.log(getUsername.data)

      if(inputCode == isCode){
        // let res = await axios.patch('http://localhost:5000/users', {
        //     isActivate: true
        // })

        // console.log(res)
        

        toast.success("Activation succes")
        setTimeout(() => {
          setIsActivate(true)
      }, 1000);

      }else{
        throw{message: "ada yg salah euy"}
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  if(isActivate) return <Navigate to='/login' />



    return(
        <>
         <div className="main-card flex justify-center my-[100px]">
        <div className="card-containter border-2 card my-bg-secondary w-max  px-[100px] pb-[100px]">
          <div className="text h-30 pt-5 flex justify-center mb-3 ">
            This is your activation Code
          </div>
          <input ref={username} type="text" placeholder='input username' />
          <div className='flex justify-center'>
            {isCode}
          </div>
          <input ref={activate} type="number" placeholder='Input activation code here' className='border-2 rounded-lg drop-shadow-lg mb-2'/>
          <div className="input flex flex-col ">
          </div>
          <div className="btn flex justify-end mt-3 ">
            <button onClick={onActivate}
              className="border-2 rounded-full h-fit py-2 px-2 my-bg-light"
            >
              Activate!
            </button>
          </div>
        </div>
        <Toaster />
      </div>
        </>
    )
}

export default Activation