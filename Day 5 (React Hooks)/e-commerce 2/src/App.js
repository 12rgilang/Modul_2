// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Register from "./pages/register/register";
import Login from './pages/login/login';
import Home from './pages/home/home';
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios';

export default function App(){

  const [username, setUsername] = useState('')

  let onLogin = async(inputUsername, inputPassword) => {
    try {
        // step.1 get input Value
        // let inputUsername = username.current.value // input username dan password ini akan dipanggil pada saat on click di page login
        // let inputPassword = password.current.value
        // step.2 check if Username & Password exist?
        let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`)
        if(response.data.length === 0) throw{message: "Account not found"}
        setUsername(response.data[0].username)

        toast.success('Login Success.')
    } catch (error) {
        toast.error(error.message)
    }
}

  return(
    <>
      <Navbar data={{username}} />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login myFunc={{onLogin}}/>} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}
