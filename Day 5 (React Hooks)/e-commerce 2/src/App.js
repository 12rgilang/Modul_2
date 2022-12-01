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
import { useEffect } from 'react';
import Menu from './pages/menu/menu';

export default function App(){

  const [username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    checkIsLogin()
  }, [])

  let checkIsLogin = async() => {
    try {
      let getTokenId = localStorage.getItem('token')
      if(getTokenId){
        let response =  await axios.get(`http://localhost:5000/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
      }
    } catch (error) {
      toast.error(error.message)
    }
    // ini jika mengambil dua data yaitu id dan username
    // let getToken = JSON.parse(localStorage.getItem('token')) //JSON hanya menerima string, sehingga object yang diambil dari data base harus diubah terlebih dahulu, dari object menjadi string
    // if(getToken){ // pengkondisian disini untuk mendapatkan apabila token nya ada dalam local storage, maka akan tetap sign in
    // setUsername(getToken.username) 
    // setRedirect(true)
  }

  let onLogin = async(inputUsername, inputPassword) => {
    try {
        // step.1 get input Value
        // let inputUsername = username.current.value // input username dan password ini akan dipanggil pada saat on click di page login
        // let inputPassword = password.current.value
        // step.2 check if Username & Password exist?
        let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`)
        if(response.data.length === 0) throw{message: "Account not found"}
        // let dataToSave = {
        //   id: response.data[0].id,
        //   username: response.data[0].username // [0] arrray 0 karena data yang diberikan dari server hanya 1 index
        // } jika menggunakan username, mmaka harus dimasukkan kedalam variable
        localStorage.setItem('token', `${response.data[0].id}` ) // JSON.stringify(dataToSave) stringify untuk merubha object menjadi string 
        setUsername(response.data[0].username)
        toast.success('Login Success.')
        setTimeout(() => {
          setRedirect(true)
        }, 2000)

    } catch (error) {
        toast.error(error.message)
    }
}


  return(
    <>
      <Navbar data={{username}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register isRedirect={{redirect}} />} />
        <Route path='/login' element={<Login myFunc={{onLogin}} isRedirect={{redirect}}/>} />'
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  )
}
