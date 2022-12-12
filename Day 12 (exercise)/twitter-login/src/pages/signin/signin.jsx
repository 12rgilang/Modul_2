import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { BsTwitter, BsApple } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai"
import { Navigate } from "react-router-dom";
// import Solar from "./assets/solar.png"
import "../signin/signin.css";


let SignIn = (props) => {
  const username = useRef();
  const password = useRef();

  if (props.isRedirect) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="parent flex flex-row my-bg-dark my-light h-screen ">
        {/* left section */}
        <div className="left flex-col sticky bottom-0 top-0 basis-3/12 px-[50px] border-r-[2px] border-slate-700 ">
          <div className="flex my-fs-30 mt-2 my-main rounded-full">
            <BsTwitter />
          </div>
          <div className="parent-explore my-5 flex items-center">
            <div className="hashtag font-bold my-fs-30">
              <HiHashtag />
            </div>
            <div className="explore pl-2 font-bold my-fs-25">Explore</div>
          </div>
          <div className="parent-setting my-5 flex items-center">
            <div className="icon font-bold my-fs-30">
              <FiSettings />
            </div>
            <div className="setting pl-2 font-bold my-fs-25">Settings</div>
          </div>
        </div>
        
        {/* Middle section */}
        <div className="middle basis-6/12 ">
          {/* SearchBar */}
          <div className="parent-search-bar flex justify-between items-center ml-[15px] mt-2">
            <div className="grow pr-4">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-dark-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-black-900 border border-gray-300 rounded-full my-bg-dark focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for Trending Tweets"
                  required
                />
                {/* <button
                  type="submit"
                  className="text-black absolute right-2.5 bottom-2.5 my-bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
              </div>
            </div>
            <span className="icon flex font-bold my-fs-30 pl-2 pr-2">
              <FiSettings />
            </span>
          </div>

          {/* middle section Jumbotron */}
          <div className="jumbotron-main flex items-end h-max border-y-[2px] border-slate-700">
            <div className="jumbotron flex-col h-2/4 ml-2 mb-2 items-end ">
              <div className=" mt-32">
                  <h2 className="my-fs-20  leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">
                    Sports . LIVE
                  </h2>
                  <div className="my-fs-25 flex flex-wrap font-bold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">
                    2022 FIFA World Cup
                  </div>
              </div>
            </div>
          </div>

          {/* Trending section */}
          <div className="trending flex items-center pl-3 pt-3">
            <div className="txt my-fs-25 text-light font-bold">
              Trending for you
            </div>
          </div>
        </div>



        {/* right section */}
        <div className="right basis-3/12 border-l-[2px] border-slate-700 px-4 pt-3 ">
          <div className="login-card border-[2px] border-slate-700 rounded-lg">
            <div className="text font-bold my-fs-25 my-light pl-2">
              New to Twitter ?
            </div>
            <p className="text-slate-700 text-[13px] pl-2">
            Sign up now to get your own personalized timeline!
            </p>
            {/* signin Google*/}
            <div className="google-signin flex bg-white text-black font-bold justify-between items-center rounded-full my-2 mx-2">
                <div className="icon flex ml-3 text-xl">
                <AiOutlineUser />
                </div>
                <div className="flex-col mx-2">
                  <p className="flex font-semibold">
                    Sign in as User
                  </p>
                  <p className="flex font-semibold">
                    email
                  </p>
                </div>
                <div className="mr-3 text-xl ">
                <FcGoogle />
                </div>
            </div>
            {/* sign in Apple */}
            <div className="login-card border-[2px] border-slate-700 bg-white text-black rounded-full my-2 mx-2">
              <div className="text flex text-black font-bold justify-center items-center my-2">
              <BsApple /><span className="pl-2">Sign up with Apple</span>
              </div>
            </div>

            {/* signup with phone */}
            <div className="login-card border-[2px] border-slate-700 bg-white text-black rounded-full my-2 mx-2">
              <div className="text flex text-black font-bold justify-center items-center my-2">
                  Sign up with phone or email
              </div>
            </div>

            <p className="text-xs pl-2 text-slate-700 pb-2">
              By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </p>
          </div>

          {/* Copyright*/}
          <div className="border-[2px] border-slate-700 rounded-lg mt-2 my-2 px-2 py-2 justify-evenly flex-nowrap ">
              <div className="parent-copy flex flex-wrap justify-start ">
                <div  className="w-fit"> 
                  <div className="flex text-[10px] h-min text-justify">Terms of Service</div> 
                </div>
                <div className="w-fit pl-2"> 
                  <div className="flex text-[10px] h-min">Privacy Policy</div> 
                </div>
                <div className="w-fit pl-2">
                  <p className="flex text-[10px] h-min">Cookie Policy</p> 
                </div>
                <div className="w-fit pl-2">
                  <p className="flex text-[10px] h-min">Accessibility</p>
                </div>
                <div className="w-fit mt-2 ">
                  <p className="flex text-[10px] h-min"> Ads info</p>
                </div>
                <div className="w-fit pl-2 mt-2 ">
                  <p className="flex text-[10px] h-min">More</p> 
                </div>
            </div>
                <div className="w-fit pt-2">
                  <p className="text-[10px] h-min text-[14px] font-semibold">© 2022 Twitter, Inc.</p>
                </div>
          </div>
        </div>
      </div> 

                

      {/* <div className="parent flex justify-center py-30">
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
      </div> */}
    </>
  );
};

export default SignIn;
