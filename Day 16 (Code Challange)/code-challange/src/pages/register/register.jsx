import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from "react-router-dom";

let Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  const email = useRef();
  const username = useRef();
  const password = useRef();

  let onSubmit = async () => {
    try {
      let inputEmail = email.current.value;
      let inputUsername = username.current.value;
      let inputPassword = password.current.value;

      if (inputUsername.length === 0 || inputPassword.length === 0 || inputEmail.length === 0)
        throw { message: "Field cannot black" };
      if (!inputEmail.includes("@") || inputEmail.length < 10)
        throw { message: "email must contain @ and atleast 10 character" };
      if (inputPassword.length < 8)
        throw { message: "Password atleast 8 character" };

      let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      if (!regex.test(inputPassword))
        throw { message: "Password must contain character and number" };

      // checking the input in the DB
      let checkInput = await axios.get(
        `http://localhost:5000/users?username${inputUsername}&email=${inputEmail}`
      );
      localStorage.setItem('token', `${checkInput.data[0].id}`)

      // if(checkInput.data.length === 0)
      // localStorage.setItem('token', `${checkInput.data}` )

      // POST ing to server using axios
      if (checkInput.data.length === 0 ) {
        let register = await axios.post("http://localhost:5000/users", {
          username: inputUsername,
          email: inputEmail,
          password: inputPassword,
          status: false
        })
        username.current.value = "";
        password.current.value = "";
        email.current.value = "";
        // setIsRegister("Register Succesfull");
        toast.success("Register Succesfull")
        setTimeout(() => {
            setIsRegister(true)
        }, 1000);
      } else {
        throw { message: "email/username alredy exist" };
      }
    } catch (error) {
    //   setIsRegister(error.message);
    toast.error(error.message)
    } finally {

    }
  };

  if(isRegister) return <Navigate to='/activation' /> 

  return (
    <>
      <div className="main-card flex justify-center my-[100px]">
        <div className="card-containter border-2 card my-bg-secondary w-max  px-[100px] pb-[100px]">
          <div className="text h-30 pt-5 flex justify-center mb-3 ">
            Sign UP here
          </div>
          <div className="input flex flex-col ">
            <input
              ref={email}
              type="email"
              placeholder="Input Your Email"
              className="border-2 rounded-lg drop-shadow-lg w-fit"
            />
            <input
              ref={username}
              type="text"
              placeholder="Input Your Username"
              className="border-2 rounded-lg drop-shadow-lg my-5 "
            />
            <input
              ref={password}
              type="password"
              placeholder="Input Your Password"
              className="border-2 rounded-lg drop-shadow-lg mb-2  "
            />
          </div>
          <div className="btn flex justify-end mt-3 ">
            <button
              onClick={onSubmit}
              className="border-2 rounded-full h-fit py-2 px-2 my-bg-light"
            >
              Sign up!
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Register;
