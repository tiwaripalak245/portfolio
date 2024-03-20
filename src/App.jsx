import React from 'react'
import Head from './components/Head/Head'
import Hero from './components/Hero/Hero'
import AboutMe from './components/Aboutme/AboutMe'
import ProjectSection from './components/projectSection/ProjectSection'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import SkillSection from './components/SkillSection/SkillSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
<Router>
      <Head/>   
<Routes>
<Route path='/' element={<Home/>}/>

</Routes>
<ToastContainer/>
    </Router>
  )
}

export default App
