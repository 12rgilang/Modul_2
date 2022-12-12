import logo from './logo.svg';
import './App.css';
import './supports/mycss/mycss.css'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Activation from './pages/activation/activation';
import Login from './pages/login/login';
import { useEffect, useState } from 'react';

function App() {

  const [redirect, setRedirect] = useState(false)

  useEffect(() => {

  }, [])
  

  let onLogin = async (inputUsername, inputPassword) => {
    try {
      let response = await axios.get(
        `http://localhost:5000/users?username${inputUsername}&password=${inputPassword}`
      );
      if (response.data.length === 0) throw { message: "Account not found" };
      localStorage.setItem("token", `${response.data[0].id}`);
      toast.success("Login Success");
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
  <>
  <Navbar />
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/activation' element={<Activation />} />
    <Route path='/login' element={<Login myFunc={{onLogin}}  isRedirect={redirect}/>} />
  </Routes>
  </>
  );
}

export default App;
