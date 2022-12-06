import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";

let img = [
  {
    name: "Twitter",
    url: "https://i.pinimg.com/originals/3b/18/33/3b1833dd1335d30db7c3968612fff938.jpg",
  },
];

let Navbar = (props) => {
  return (
    <>
      <div className="navbar flex my-bg-dark h-16 items-center border-b-2 border-light">
        <div className="left w-12 h-12 pl-5 basis-2/5 pt-2 flex items-center ">
          <Link to="/">
            <img
              className="rounded-full w-12 h-12 "
              src={img[0].url}
              alt="twitter logo"
            />
          </Link>
          <span className="my-fs-20 font-semibold pl-2 my-light">Twitter</span>
        </div>
        <div className="right flex basis-3/5 items-center justify-end pr-3 pt-2">
          <div className="home my-fs-20 font-semibold my-light mr-2">Home</div>
          {props.data.username ? (
            <div className="flex items-center">
              <div className="font-bold my-main">{props.data.username}</div>
              <span className="my-fs-20 ml-1 font-bold my-bg-main">
                <CgProfile onClick={props.myFunc.onSignOut} />
              </span>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <div className="signin my-fs-15 font-semibold border-2 px-3 py-2 rounded-full mx-2 my-light">
                  Sign in
                </div>
              </Link>
              <Link to="/register">
                <div className="join my-fs-15 font-semibold border-2 px-3 py-2 rounded-full my-light">
                  Join Now
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
