import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import "../register/register.css";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

let Register = (props) => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [isregister, setIsRegister] = useState(false)
  

  const username = useRef();
  const email = useRef();
  const password = useRef();


  let onSubmit = async () => {
    try {
      // step1 create variable for validate an input
      let inputUsername = username.current.value;
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;
      // step.2 validate input value
      if (
        inputUsername.length === 0 ||
        inputPassword.length === 0 ||
        inputEmail === 0
      )
        throw { message: "Field cannot blank" };
      if (!inputEmail.includes("@") || inputEmail.length < 10)
        throw { message: "email must contain @ and atleast 10 character" };
      if (inputPassword.length < 8)
        throw { message: "Password atleast 8 character" };

      // step 3 validate the password using regular expression or regex
      let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      if (!regex.test(inputPassword))
        throw { message: "Password must contain character and number" };

      // ketika syntax diatas sudah selesai dijalankan, maka akan merubah button yang value nya flse menjadi true dan menjalan syntax dibawahnya
      setDisabledButton(true);
      let checkEmail = await axios.get(
        `http://localhost:5000/users?email=${inputEmail}`
      );
      let checkUsername = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}`
      );

      // POST to server
      if (checkEmail.data.length === 0 && checkUsername.data.length === 0) {
        let register = await axios.post("http://localhost:5000/users", {
          username: inputUsername,
          email: inputEmail,
          password: inputPassword,
        });
        username.current.value = "";
        password.current.value = "";
        email.current.value = "";
        // apabila input sukses maka akan kembali kosong
        // username.current.value = ''
        // password.current.value = ''
        toast.success("Register Succsesfull");
        setTimeout(() => {
            setIsRegister(true)
        }, 1000);
      } else {
        throw { message: "email/username already exist" };
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDisabledButton(false);
    }
  };

  if(isregister) return <Navigate to='/home' />

  return (
    <>
      <div className="parent flex justify-center my-bg-grey py-20">
        <div className="w-2/4 flex justify-center ">
          <div className="flex-col w-4/5 cards px-32 mt-5 py-20 items-center my-bg-dark my-light border-2 border-black">
            <div className="flex justify-center py-2 my-fs-30 my-main ">
              <BsTwitter />
            </div>
            <div className="flex justify-center my-fs-30 py-4 font-bold">
              Join Twitter today
            </div>
            <div className="flex justify-center border-2 rounded-full py-3 px-4">
              <div className="flex items-center">
                <FcGoogle /> <span className="pl-2">Sign in with google</span>
              </div>
            </div>
            <div className="font-bold my-fs-20 my-3 flex justify-center">
              Or
            </div>
            <div className="input flex flex-col ">
              <input
                ref={username}
                type="text"
                placeholder="inpout your username"
                className="border-2 rounded-lg drop-shadow-lg mb-2  "
              />
              <input
                ref={email}
                type="text"
                placeholder="input your email"
                className="border-2 rounded-lg drop-shadow-lg mt-2"
              />
              <input
                ref={password}
                type="password"
                placeholder="Min 8 character including number "
                className="border-2 rounded-lg drop-shadow-lg mt-2"
              />

              <div className="flex justify-end py-3">
                <button
                  onClick={onSubmit}
                  disabled={disabledButton}
                  className=" border-2 rounded-full px-3 py-2 my-bg-main "
                >
                  <p className="font-bold my-dark">
                    {disabledButton ? "loading" : "Sign up"}{" "}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Register;
