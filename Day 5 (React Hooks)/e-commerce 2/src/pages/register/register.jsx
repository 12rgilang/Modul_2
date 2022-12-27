import './register.css';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast'

export default function Register(){
    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState('')
    const [isRegister, setIsRegister] = useState(false)


    const username = useRef()
    const email = useRef()
    const password = useRef()

        // urutan pertama untuk membuat  function onsubmit
    let onSubmit = async() => {
        try {
        
        // urutan terakhir untuk conditional  

        // step.1 VAlidate Inout value
        let inputUsername = username.current.value
        let inputEmail = email.current.value
        let inputPassword = password.current.value 

        // Step2 Validate input value
        if(inputUsername.length === 0 || inputPassword.length === 0 || inputEmail.length === 0) throw {message: 'Field cannot blank'}
        if(!inputEmail.includes("@") || inputEmail.length < 10 ) throw {message: 'email must contain @ and contain at least 10 char'}
        if(inputPassword.length < 8 ) throw {message: 'Password at least 8 character'}

        // validate using regex (regular expression)
        let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9A-Za-z!@#$%^&*]{8,}$/
        if(!regex.test(inputPassword)) throw {message: 'Password must contains any number,special and capitalize Char'}
        
        setDisabledButton(true) 
        // let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`)
        // let checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)

            // if(checkEmail.data.length === 0 && checkUsername.data.length === 0){ // pengkondisian nmenggunakan check di front end
                //POST
                let result = await axios.post(`http://localhost:2023/users/register`, {username: inputUsername, email: inputEmail, password: inputPassword})
                username.current.value = '' // ini apa bila succes maka input field akan kembali kosong 
                password.current.value = ''
                email.current.value = ''
                toast.success(result.data.message) // ini memunculkan alert menggunakan npm toast
                setMessage('') // seteleah input pendaftaran selesai maka pemberitahuan akan kembali kosong
                setTimeout(() =>{
                    setIsRegister(true)
                }, 2500)
                
            // }else{ front-end
            //     throw { message: 'Email/username already register'}
            // }
        } catch (error) {
            // setMessage(error.message) //ini jika ingin menampilkan pemberitahuan dibawah inputnfield
            toast.error(error.message)
            // setMessage(error.response.data.message)
        }finally{
            setDisabledButton(false)
        }
    }

    if(isRegister){
        return <Navigate to='/login' />
    }

    return(
        <div  className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Create an account
            </h1>
            <h1 className="my-fs-15 my-grey mt-5 font-bold">
                PURWADHIKA® REWARDS
            </h1>
            <p className="my-grey mt-3" style={{maxWidth: '600px', textAlign: 'center'}}>
                Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
            </p>

            <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md flex flex-column">
                <p className='font-bold'>
                    * indicates required field
                </p>
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Personal Information
                </h1>
                <input ref={username} type="text" placeholder='Input Username' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid green'}} />
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Account Security
                </h1>
                <input ref={email} type="text" placeholder='Input Email' className='py-2 px-2 w-100 rounded-md my-3' style={{border: '1px solid green'}} />
                <input ref={password} type="password" placeholder='Input Password' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid green'}} />
                <div className='pt-2 text-red-500'>
                    {message}
                </div>
                <button disabled={disabledButton} onClick={onSubmit} className='my-bg-main w-25 my-light px-2 py-3 mt-3 rounded-full self-end'>
                    {disabledButton? 'Loading' : 'Sign Up'}
                </button>
            </div>
            <Toaster />
        </div>
    )
}
