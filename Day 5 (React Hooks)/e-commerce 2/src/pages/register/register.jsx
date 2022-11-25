import './register.css';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Register(){
    const [disabledButton, setDisabledButton] = useState(false)

    const username = useRef()
    const email = useRef()
    const password = useRef()

    let onSubmit = async() => {
        setDisabledButton(true)
        
        let inputUsername = username.current.value
        let inputEmail = email.current.value
        let inputPassword = password.current.value 
        try {
            let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`)
            let checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)

            if(checkEmail.data.length === 0 ){ //
                //POST
                let register = await axios.post('http://localhost:5000/users', {username: inputUsername, email: inputEmail, password: inputPassword})
            }else{
                throw { message: 'Email/username already register'}
            }
        } catch (error) {
            console.log(error.message)
        }finally{
            setDisabledButton(false)
        }
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
                <button disabled={disabledButton} onClick={onSubmit} className='my-bg-main w-25 my-light px-2 py-3 mt-3 rounded-full self-end'>
                    {disabledButton? 'Loading' : 'Sign Up'}
                </button>
            </div>
        </div>
    )
}
