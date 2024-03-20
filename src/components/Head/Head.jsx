import React, { useState } from "react"
import "../Head/Head.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../features/theme/themeSlice"

const Head = () => {

  const dispatch = useDispatch()
  const darkTheme = useSelector((state) => state.theme.darkTheme)

 const handleTheme = () => {
  dispatch(toggleTheme())
}




  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header?.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header' style={{ background: darkTheme ? '#ffffff' : '#000' , color: darkTheme ? '#000' : '#fff' }}>
        <div className='container d_flex'>
          <div className='logo'>  
          </div>

          <div className='navlink' data-aos="fade-up">

            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li className="clr-btn" >
                <Link to={'/'} id="home" style={{color: darkTheme ?'#000' : '#fff'  }}>home</Link>
              </li>
              <li className="clr-btn">
                <a href='#aboutme' style={{color: darkTheme ?'#000' : '#fff'  }}>About ME</a>
              </li >
              <li className="clr-btn">
                <a href='#education' style={{color: darkTheme ?'#000' : '#fff'  }}>qualifications</a>
              </li>
              <li className="clr-btn">
                <a href='#experience' style={{color: darkTheme ?'#000' : '#fff'  }}>experience</a>
              </li>
              <li className="clr-btn">
                <a href='#projects' style={{color: darkTheme ?'#000' : '#fff'  }}>Projects</a>
              </li>
              <li className="clr-btn">
                <a href='#skills' style={{color: darkTheme ?'#000' : '#fff'  }}>skills</a>
              </li >
              <li className="clr-btn">
                <a href='#contact' style={{color: darkTheme ?'#000' : '#fff'  }}>contact</a>
              </li>
<li>
<button className="theme-btn" onClick={handleTheme}>{darkTheme ? 'Light Theme' : 'Dark Theme'}

</button>
</li>
            </ul>


            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Head
