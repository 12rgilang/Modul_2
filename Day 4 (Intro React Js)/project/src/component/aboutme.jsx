import react from "react";

let img = [
    'https://scontent.fcgk19-1.fna.fbcdn.net/v/t31.18172-8/19620339_1608390025839785_2900250601264497636_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEG0yv8hJWq7FysB1s_EQwcfTMlxQn0a699MyXFCfRrr6fquKeenqe2MtphYtM-_SlReky3_wXSX1sYNOM7-fjb&_nc_ohc=PxwlBxwqfd8AX_MuMOB&_nc_ht=scontent.fcgk19-1.fna&oh=00_AfD85AXG1dkcj1pcmr2rDRQMGVL5zkdVLzTbOgObvpzkDg&oe=63A2AE57'
]

class AboutMe extends react.Component{
    render(){
        return(
            <>
    <div className="about-me" id="about">
        <div className="title">
            <h1>
                About Me
            </h1>
            <div className="line">
               
            </div>
        </div>
        <div>
            <p>
                Iam a career switcher , after long journey around 7 years at Aviation industries i decided to take one step further into Tech world. Currently learning and developing my skills at Purwadhika Digital School as Full Stack Web Developer.  
            </p>
        </div>
        <div className="hvr-glow">
            <img src={img} alt="Foto"/>
        </div>
    </div>
            </>
        )
    }
}

export default AboutMe;