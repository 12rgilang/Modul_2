import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../splashscreen/splashscreen.css'
import TypeWriter from 'typewriter-effect'

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const history = useNavigate();

 
    setTimeout(() => {
      history("/home");
    }, 6000);


  if (showSplash) {
    return (
      <div className="typewriter">
        <span className='bg-gray-800 h-screen flex items-center justify-center text-white font-bold text-5xl'>  
        <TypeWriter
                                onInit={(TypeWriter)=>{
                                TypeWriter
                                .typeString("npm")
                                .pauseFor(1000)
                                .typeString("srat")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("npm start")
                                .pauseFor(1000)
                                .start();
                                
                            }
                        }/>
        </span>
      </div>
    );
  }
}

export default SplashScreen;
