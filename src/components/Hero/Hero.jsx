import React from "react";
import "../Hero/Hero.css";
// import hero from "../../assets/hero.png"
import skill1 from "../../assets/skill1.png";
import github from "../../assets/github.png";
import skill3 from "../../assets/skill3.png";
import Resume from "./Resume";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <section
        className="hero"
        id="home"
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{
          background: darkTheme ? "#fcfafa" : "#000",
          color: darkTheme ? "#000" : "#fff",
        }}
      >
        <div
          className="container f_flex"
          style={{
            background: darkTheme ? "#fcfafa" : "#000",
            color: darkTheme ? "#000" : "#fff",
          }}
        >
          <div className="left top">
            <h1>
              Hi, I’m <span>Palak Tiwari</span>
            </h1>
            <h2>
              <span>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
              </span>
            </h2>

            <p>
              {" "}
              Versatile Full Stack Developer proficient in a wide range of
              technologies including HTML5, CSS3, JavaScript, React, Redux,
              Node.js, and Express.js. Skilled in developing both front end and
              back end components of web applications. Experienced in building
              interactive and responsive user interfaces, implementing efficient
              state management solutions.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button-icons">

                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <a href="https://www.linkedin.com/in/palak-tiwari-3a4684196/" target="_blank" rel="noopener noreferrer">
                    <button className="btn_shadow">
                      <img src={skill1} alt="" />
                    </button>
                  </a>
            
            <a href="https://github.com/tiwaripalak245" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow">
                    <img src={github} alt="" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <Resume />
          </div>
          <div className="right">
            <div className="right_img">{/* <img src={hero} alt='' /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
