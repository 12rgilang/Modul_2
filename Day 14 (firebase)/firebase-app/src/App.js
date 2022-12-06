// import { Suspense, lazy } from 'react'
// import {Routes, Route} from 'react-router-dom'
// const Home = lazy(() => import('./pages/home'))
// const Profile = lazy(() => import('./pages/profile'))

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "./firebase";
import { useRef, useState } from "react";
import { useEffect } from "react";


const provider = new GoogleAuthProvider();

function App() {
  const email = useRef();
  const password = useRef();

  const[data, setData] = useState('')


  // untuk mendaftarkan ke firebase menggunakan email
  // let onRegister = async() =>{

  //   try {
  //        // step.1 AMbil data value
  //   let inputEmail = email.current.value
  //   let inputPassword = password.current.value

  //   // fire base auth mengambil 3parameter dan sudah paasti
  //   let response = await createUserWithEmailAndPassword(
  //     auth,
  //     inputEmail,
  //     inputPassword
  //   )
  //   console.log(response)
  //   } catch (error) {
  //     console.log(error.message)
  //   }

  // }

  // untuk signin menggunakan firebase
  let onLogin = async () => {
    try {
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;

      let response = await signInWithEmailAndPassword(
        auth,
        inputEmail,
        inputPassword
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  let onLoginWithGoogle = async() =>{
    try {
      let response = await signInWithPopup(auth, provider)
      setData(response.user.email)
    } catch (error) {
      console.log(error.message)
    }
  }

  let onSignOut = async() =>{
    try {
        let response = await signOut(auth)
        setData('')
    } catch (error) {
      console.log(error.message)
    }
  }

  onAuthStateChanged(auth, (userFromFireBase) => {
    if(userFromFireBase){
      
      setData(userFromFireBase.email)
      
    }
  })


  return (
    <>
      {/* <Suspense fallback={<h1>Loading............</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Suspense> */}
      <h1>
        {data}
      </h1>
      <input ref={email} type="text" placeholder="Enter Your Email" />
      <input ref={password} type="password" placeholder="Enter Your Password" />
      {/* <button onClick={onRegister}>Click !</button> */}
      <button onClick={onLogin}>Login</button>
      <button onClick={onLoginWithGoogle}> Login with Google </button>
      <button className="mb-3" onClick={onSignOut}> Log Out</button>
    </>
  );
}

export default App;
