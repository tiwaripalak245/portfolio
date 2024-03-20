import React from 'react'
import '../projectSection/ProjectSection.css'
import projectsData from '../../Data/projects.json'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
<>
<div className='button-box' id='projects' data-aos="fade-up"
     data-aos-duration="3000">
 <button className="head-button">Projects</button>

    </div>
<div className="project-cards" data-aos="fade-up"
     data-aos-duration="3000">
{
    projectsData.map((project, index) => <ProjectCard key={index} project = {project} />)
}

</div>
</>
  )
}

export default ProjectSection
