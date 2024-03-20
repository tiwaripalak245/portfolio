import React from 'react'
import '../Education/Education.css'

const Education = () => {
  return (
<>
<div className='button-box' id='education' data-aos="fade-up"
     data-aos-duration="3000">
    <button className="head-button">Qualifications </button>
   
       </div>
<div className="ed-card" data-aos="fade-up"
     data-aos-duration="3000">
  <div className="ed-content">
    <h5 className="ed-heading">Master's of Business Administration</h5>
    <p className="ed-para">
      Institute of Management Studies, DAVV
    </p>
    <h5 className="ed-heading">Bachelor's of Commerce</h5>
    <p className="ed-para">
      Vikram University
    </p>
    <h5 className="ed-heading">Higher Secondary Education</h5>
    <p className="ed-para">
      Sahaj Public School
    </p>
  </div>
</div>
</>
  )
}

export default Education
