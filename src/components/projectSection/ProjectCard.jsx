import React from 'react'
import '../projectSection/ProjectSection.css'

const ProjectCard = ({project}) => {
  return (
<>
<div className="card redbox" data-aos="fade-up"
     data-aos-duration="3000">
      <video src={project.video}></video>
        <h2 className="tip">{project.title}</h2>
        <p className="second-text">{project.description}</p>
        <span className='"button-box"'>
            {/* <button  className="head-button">Live link</button>
            <button  className="head-button">Guthub</button> */}

        </span>
    </div>
</>
    
  )
}

export default ProjectCard
