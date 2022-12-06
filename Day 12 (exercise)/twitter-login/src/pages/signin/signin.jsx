import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Navigate } from "react-router-dom";
import "../signin/signin.css";

let SignIn = (props) => {
  const username = useRef();
  const password = useRef();

  if (props.isRedirect) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="parent flex justify-center py-30">
        <div className="w-2/4 flex justify-center ">
          <div className="flex-col w-4/5 cards px-32 mt-5 py-20 items-center border-2 my-light my-bg-dark rounded-lg">
            <div className="flex justify-center py-2 my-fs-30 my-main ">
              <BsTwitter />
            </div>
            <div className="flex justify-center my-fs-30 py-4 font-bold ">
              Sign in to Twitter
            </div>
            <div className="flex justify-center border-2 rounded-full py-m3 px-4">
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
                placeholder="input your username"
                className="border-2 rounded-lg drop-shadow-lg mb-2  "
              />
              <input
                ref={password}
                type="password"
                placeholder="Input your password"
                className="border-2 rounded-lg drop-shadow-lg mt-2"
              />
              <div className="flex justify-end py-3">
                <button
                  onClick={() =>
                    props.myFunc.onSignIn(
                      username.current.value,
                      password.current.value
                    )
                  }
                  className=" border-2 rounded-full px-3 py-2 my-bg-main "
                >
                  <p className="font-bold my-dark"> Login </p>
                </button>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default SignIn;
