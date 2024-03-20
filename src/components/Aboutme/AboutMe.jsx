import React from "react";
import "../Aboutme/AboutMe.css";
import HeadButton from "../HeadingButton/HeadButton";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme)

  return (
    <>
<HeadButton/>
      <div className="about-card" id="aboutme" style={{ background: darkTheme ? '#ffff' : '#000' , color: darkTheme ? '#000' : '#ffff' }} data-aos="fade-up"
     data-aos-duration="3000">
        <div className="card-overlay">
          <p style={{color: darkTheme ?'#000' : '#fff'  }}>
   
            Hello! I'm Palak Tiwari, a passionate Full Stack Developer with a
            background in Digital Marketing. With over 2 and a half years of
            experience in the dynamic field of Digital Marketing. I embarked on
            a journey to transition into the world of Full Stack Development.
            Over the past 7 months, I've immersed myself in intensive training,
            mastering various technologies of the MERN stack - MongoDB,
            Express.js, React.js, and Node.js. During this time, I've had the
            opportunity to work on diverse projects, ranging from responsive web
            applications to dynamic e-commerce platforms. My dedication to
            continuous learning and growth drives me to stay updated with the
            latest technologies and best practices in the ever-evolving tech
            landscape.
          </p>

        </div>
        
        <div className="card-inner">
        </div>
        <ul className="about-info" >
         <li className="box" >
          <span style={{color: darkTheme ?'#000' : '#fff'  }} className="text-info">Name: </span>
          <span className="info" style={{color: darkTheme ?'#000' : '#fff'  }}> Palak Tiwari</span>
          </li>
          <li className="box" >
          <span style={{color: darkTheme ?'#000' : '#fff'  }} className="text-info">Address:</span>
          <span className="info" style={{color: darkTheme ?'#000' : '#fff'  }}>Mahesh Bagh Colony, Mr-9</span>
          </li>
          <li className="box" >
          <span style={{color: darkTheme ?'#000' : '#fff'  }} className="text-info">Email:</span>
          <span className="info" style={{color: darkTheme ?'#000' : '#fff'  }}>tiwaripalak836@gmail.com</span>
          </li>
          <li className="box" >
          <span style={{color: darkTheme ?'#000' : '#fff'  }} className="text-info">Phone:</span>
          <span className="info" style={{color: darkTheme ?'#000' : '#fff'  }}>8962922380</span>
          </li>
          </ul>
      </div>

    </>
  );
};

export default AboutMe;
