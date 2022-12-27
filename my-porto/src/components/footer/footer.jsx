import {  BsInstagram, BsGithub, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import {useLocation} from 'react-router-dom'

function Footer() {

    let location = useLocation()

    let socmed = [
        {name: "instagram", "url": "https://www.instagram.com/12rgilang/"},
        {name: "linkedin", "url": "https://www.linkedin.com/in/gilang-ramadhan-fullstackdev2022/"},
        {name: "facebook", "url": "https://www.facebook.com/gilang.ramadhan.39501789"},
        {name : "github", "url": "https://github.com/12rgilang"},
        {name: "twitter", "url": "https://twitter.com/G_R12/status/1574050538693758976"},
      ]
    

    return (
        <>
        {
            location.pathname === '/' ? 
            null 
            :
            <div className="main flex sm:flex md:flex lg:flex justify-between my-bg-secondary items-center h-16 fixed bottom-0 w-full px-5 mt-5">

                <div className="copyright sm:flex md:flex lg:flex sm:text-lg lg:text-xl ">
                  <span className="flex pr-2">© 2022 Gilang Ramadhan.</span> 
                  <span className="flex-wrap">All rights reserved.</span>  
                </div>
                <div  className="socmed flex my-fs-30 px-3 my-3 items-center">
                    <div className="instagram hvr-bob ">
                      <a href={socmed[0].url}>
                        <BsInstagram />
                      </a>  
                    </div>
                    <div className="linkedin px-4 hvr-bob">
                      <a href={socmed[1].url}>
                        <BsLinkedin />
                      </a>  
                    </div>
                    <div className="facebook hvr-bob">
                      <a href={socmed[2].url} target="_blank">
                        <BsFacebook />
                      </a>  
                    </div>
                    <div className="github px-4 hvr-bob">
                      <a href={socmed[3].url}>
                        <BsGithub />
                      </a>
                    </div>
                    <div className="twitter hvr-bob ">
                      <a href={socmed[4].url}> 
                        <BsTwitter />
                      </a>
                    </div>
            </div>
        </div>
        }
        </>
    )
}

export default Footer