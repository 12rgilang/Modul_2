import axios from 'axios';
import { useState, useRef } from 'react';
import '../login/login.css'

let Login = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()

    let inputUsername = username.current.value
    let inputEmail = email.current.value
    let inputPassword = password.current.value


    let onSubmit = async() => {
        try {
        let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`)
        let checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)
        let checkPassword = await axios.get(`http://localhost:5000/users?password=${inputPassword}`)

        if(checkEmail.data.length === 0 && checkPassword === inputPassword){
            <Link to='/navbar' ></Link>
        }
        } catch (error) {
            
        }
    }


    return(
        <div className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Sign in
            </h1>
        
            <div className="cards mt-10 px-20 py-10 w-2/5 rounded-md flex flex-column justify-around">
                <p className='mb-3'>
                    *indicates required field
                </p>
                <input ref={username || email} type="text" placeholder='Username or email address' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid black'}} />
                <input ref={password} type="password" placeholder='Password' className='py-2 px-2 w-100 rounded-md mt-4 mb-3 flex-nowrap' style={{border: '1px solid black'}} />
                <input type="checkbox" className='self-start flex-start'/> Keep me sign in.<a href='#' className='flex-start'>Details</a>
                <a href='#' className='my-fs-15 font-bold mt-2 mb-3 my-main' >Forgot yout username ?</a>
                <a href='#' className='my-fs-15 font-bold my-main' >Forgot yout password ?</a>
                <button onClick={onSubmit} className='my-bg-main w-25 my-light px-2 py-3 mt-3 mt-3 rounded-full self-end'>
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Login;