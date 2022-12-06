import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Navigate } from "react-router-dom";

let Home = (props) => {
  const [dissabledTweet, setDisabledTweet] = useState(false);
  const [data, setData] = useState([]);

  const tweet = useRef();

  let OnTweet = async () => {
    try {
      let inputTweet = tweet.current.value;
      if (inputTweet.length > 160 || inputTweet.length < 0)
        throw { message: "Tweet cannot more then 160 char" };
      setDisabledTweet(true);

      if (inputTweet.length > 0 && inputTweet.length < 160) {
        let post = await axios.post(`http://localhost:5000/tweet`, {
          tweet: inputTweet,
          userId: parseInt(localStorage.getItem("token")),
        });
        tweet.current.value = "";
        console.log(post);
        toast.success("Tweet sent!");
        if (inputTweet.length === 0) {
          setDisabledTweet(false);
        }
        onGetData();
      } else {
        throw { message: "Field cannot be blank" };
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDisabledTweet(false);
    }
  };

  let onGetData = async () => {
    try {
      let response = await axios.get("http://localhost:5000/tweet");
      let getUsers = await axios.get("http://localhost:5000/users");

      let newData = [];
      response = response.data;
      getUsers = getUsers.data;
      for (let i = 0; i < response.length; i++) {
        console.log(response[i]);
        for (let j = 0; j < getUsers.length; j++) {
          if (response[i].userId === getUsers[j].id) {
            response[i].username = getUsers[j].email;
            newData.push(response[i]);
            break;
          }
        }
      }

      // response.forEach(value => {
      //     getUsers.forEach(val => {
      //         if(value.userId === val.id){
      //             value.username = val.email
      //             newData.push(value)
      //         }
      //     })
      // })

      setData(newData);
    } catch (error) {}
  };

  let onDelete = async() =>{
      try {
        let response = await axios.delete(`http://localhost:5000/tweet`,)
        console.log(response)
      } catch (error) {
          
      }
  }

  useEffect(() => {
    props.myFunc.checkIsSignIn();
    onGetData();
    onDelete()
  }, [])

  //ini untuk mereverse urutan tweet
  const newData = data

  // ini untuk perkondisian mengecek apakah teerdapat token/sudah login
  if (!props.isRedirect) return <Navigate to="/" />;

  return (
    <>
      <div className="parent flex my-bg-dark my-light">
        <div className="left border-r-2 flex basis-1/6 my-fs-20 my-dark items-center mx-3 my-5 my-light">
          <span className="flex mr-2">
            <MdHome />
          </span>{" "}
          Home
        </div>
        <div className="middle flex-col basis-3/6">
          <div className="tittle my-fs-25 font-bold mt-2 flex items-center">
            Home{" "}
            <span className="items-center pl-2">
              <CgProfile />
            </span>
          </div>
          <div className="textarea-parent flex flex-col ">
            <div className="textarea-main flex flex-col ">
              <textarea
                ref={tweet}
                placeholder="What is in your head"
                cols="55"
                rows="5"
                className="border-b-2 border-white my-bg-dark"
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={OnTweet}
                  disabled={dissabledTweet}
                  className="flex-wrap border-2 px-4 py-2 rounded-full my-fs-20 font-semibold my-dark my-bg-main my-2 border-black "
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
          <div className="tweet flex flex-col ">
            {
              // ini untuk mereverse urutan tweet
              [...newData].reverse().map((value, index) => {
              return (
                <div key={index} className="px-3 py-3 border-2 border-light rounded-full mb-3 pl-[100px]">
                  <div className="flex font-bold my-fs-15 ">
                    {value.username}
                  </div>
                  <div className="flex flex-wrap font-semibold">
                    {value.tweet}
                  </div>
                  <div className="flex justify-end pr-3"> 
                  <button onClick={onDelete} className="px-3 py-3 my-fs-10 border-2 border-light rounded-full my-dark font-semibold my-bg-main">
                      Delete tweet
                  </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right basis-2/6 flex">tes</div>
        <Toaster />
      </div>
    </>
  );
};

export default Home;
