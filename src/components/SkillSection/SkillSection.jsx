import React from 'react'
import html from '../../assets/html-5.svg'
import css from '../../assets/css3-original-wordmark.svg'
import js from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import redux from '../../assets/redux-original.svg'
import ex from '../../assets/express-original.svg'
import material from '../../assets/material-ui.svg'
import tailwind from '../../assets/tailwind-css.svg'
import bootstrap from '../../assets/bootstrap.svg'
import mongo from '../../assets/mongo.png'
import git from '../../assets/github.svg'
import seo from '../../assets/search-engine.svg'
import '../SkillSection/SkillSection.css'

const SkillSection = () => {
  return (
<>
<div className='button-box' id='skills' data-aos="fade-up"
     data-aos-duration="3000">
 <button className="head-button">Skills</button>

    </div>
    <section className='skill-container' data-aos="fade-up"
     data-aos-duration="3000">
      <div className="skill-box">
        <img src={html} alt="" style={{width: "50px"}}/>
        <p>Html5</p>
      </div>
      <div className="skill-box">
        <img src={css} alt="" style={{width: "50px"}}/>
        <p>Css3</p>
      </div>
      <div className="skill-box">
        <img src={js} alt="" style={{width: "50px"}}/>
        <p>JavaScript</p>
      </div>
      <div className="skill-box">
        <img src={react} alt="" style={{width: "50px"}}/>
        <p>Reactjs</p>
      </div>
      <div className="skill-box">
        <img src={redux} alt="" style={{width: "50px"}}/>
        <p>Redux</p>
      </div>
      <div className="skill-box">
        <img src={bootstrap} alt="" style={{width: "50px"}}/>
        <p>BootStrap</p>
      </div>
      <div className="skill-box">
        <img src={tailwind} alt="" style={{width: "50px"}}/>
        <p>Tailwind</p>
      </div>
      <div className="skill-box">
        <img src={material} alt="" style={{width: "50px"}}/>
        <p>Material UI</p>
      </div>
      <div className="skill-box">
        <img src={node} alt="" style={{width: "50px"}}/>
        <p>NodeJs</p>
      </div>
      <div className="skill-box">
        <img src={mongo} alt="" style={{width: "50px"}}/>
        <p>Mongo DB</p>
      </div>
      <div className="skill-box">
        <img src={ex} alt="" style={{width: "50px"}}/>
        <p>ExpressJs</p>
      </div>
      <div className="skill-box">
        <img src={git} alt="" style={{width: "50px"}}/>
        <p>Git</p>
      </div>
      <div className="skill-box">
        <img src={seo} alt="" style={{width: "50px"}}/>
        <p>SEO</p>
      </div>

    </section>
</>
  )
}

export default SkillSection
