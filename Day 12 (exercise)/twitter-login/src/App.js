import "./supports/mycss/mycss.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./pages/signin/signin";
import Navbar from "./pages/navbar/navbar";
import Register from "./pages/register/register";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/home/home";

function App() {
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    checkIsSignIn();
  }, []);

  // untuk mengecek apakah sudah login, dan apabila sudah login akan mengubah nya di navbar
  let checkIsSignIn = async () => {
    try {
      let getTokenId = localStorage.getItem(`token`);
      if (getTokenId) {
        let response = await axios.get(
          `http://localhost:5000/users?id=${getTokenId}`
        );
        setUsername(response.data[0].username);
        setRedirect(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  let onSignIn = async (inputUsername, inputPassword) => {
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

  let onSignOut = () => {
    localStorage.removeItem("token");
    setRedirect(false);
    setUsername("");
  };

  return (
    <>
      <Navbar data={{ username }} myFunc={{ onSignOut }} />
      <Routes>
        <Route
          path="/"
          element={<SignIn myFunc={{ onSignIn }} isRedirect={redirect} />}
        />
        <Route
          path="/home"
          element={<Home myFunc={{ checkIsSignIn }} isRedirect={redirect} />}
        />
        <Route
          path="/signin"
          element={<SignIn myFunc={{ onSignIn }} isRedirect={redirect} />}
        />
        <Route path="/register" element={<Register isRedirect={redirect} />} />
      </Routes>
    </>
  );
}

export default App;
