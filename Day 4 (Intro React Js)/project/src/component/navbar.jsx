import React from "react";
import Logo from '../assets/logo.ico'



class Navbar extends React.Component{
    render(){
        return(
            <>
            <div className="navbar">
                <div className="left-logo">
                    <a href="#top"><img src={Logo} alt="Gilang Ramadhan" /></a>
                </div>
                    <span className="hide">Portofolio</span>
                <div className="right-menu">
                <div className="about">
                    <a href="#about">About</a> 
                </div>
                <div className="hobby">
                    <a href="#hobby">Hobby</a> 
                </div>
                <div className="wrk">
                    <a href="#exp">Experience</a> 
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar