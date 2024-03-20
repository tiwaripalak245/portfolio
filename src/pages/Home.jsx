import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/Aboutme/AboutMe'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import ProjectSection from '../components/projectSection/ProjectSection'
import SkillSection from '../components/SkillSection/SkillSection'
import '../styles/home.css'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'

const Home = () => {


  const darkTheme = useSelector((state) => state.theme.darkTheme)

  return (
<>
<div className="main-container" style={{ background: darkTheme ? '#fcfafa' : '#000' , color: darkTheme ? '#000' : '#fff' }}
data-aos="fade-up"
data-aos-duration="3000"
>
<Hero/>
<AboutMe/>
<Education/>
<Experience/>
<ProjectSection/>
<SkillSection/>
<Footer/>
</div>
</>

  )
}

export default Home
