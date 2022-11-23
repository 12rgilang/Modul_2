import react from "react";

class Jumbotron extends react.Component{
    render(){
        return(
            <>
                <div className="jumbotron">
        <div className="jumbotron-left">
            <div className="line">
                <div className="icon">
                    <a href="https://github.com/12rgilang"  target="_blank">
                        <i className="fab fa-github fa-2x">

                        </i>
                    </a>
                    <a href="https://www.linkedin.com/in/gilang-ramadhan-fullstackdev2022/" target="_blank">
                        <i className="fab fa-linkedin-in fa-2x">

                        </i>
                    </a>
                    <a href="https://www.instagram.com/12rgilang/" target="_blank">
                        <i className="fab fa-instagram-square fa-2x">
                        </i>
                    </a>
                </div>
            </div>
        </div>
        <div className="jumbotron-main">
            <div className="greetings">
                Hi , Im Gilang Ramadhan.
            </div>  
            <div className="name">
            Full Stack <br />
            <span >Web Developer. </span>
            </div>
            <div>
                <p>
                    <br />
                    MERN (MySql, Express Js, React Js, and Node Js.)
                </p>
            </div>
            <div>
                <button className="btn-click"id="btn-real">
                    <a href="#about">Lets Dive In!</a> 
                </button>
            </div>  
        </div>
        <div className="jumbotron-right">
            <div className="email">
               <a href="mailto:gilang.ramadhan011297@gmail.com"> gilang.ramadhan011297@gmail.com</a>
            </div>
            <div className="line"></div>
        </div>
    </div>
            </>
        )
    }
}

export default Jumbotron;