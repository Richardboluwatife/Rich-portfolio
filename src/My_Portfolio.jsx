import React, { useState } from 'react'
import Logoo from './assets/Logoo.png'
import { Link } from 'react-scroll'
// import Menu from './assets/Menu.png'
import Screenshot from './assets/Screenshot.png'
import Menu from './assets/Menu.png'

function My_Portfolio() {
  const [ShowMenu, setShowMenu] = useState(false)
  return (
    <div>
      <nav className="Navbar">
        <div className='logo'>
          <img src={Logoo} alt="logo" />
        </div>
        <div className="desktopMenu">
          <a href='/' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</a>
        </div>
        <a href="/"><button className="desktopMenuBtn" onClick={() => {
          document.getElementById('Contact').scrollIntoView({ behavior: "smooth" });
        }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJS1ROVmsjuVOt1KXqoxHlxs1E3Bq4uSv_lvAR_g_UsSQG9Pl" alt="" className=" desktopMenuImg" />Contact Me</button></a>
        {/* <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('Contact').scrollIntoView({ behavior: "smooth" });
        }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJS1ROVmsjuVOt1KXqoxHlxs1E3Bq4uSv_lvAR_g_UsSQG9Pl" alt="" className=" desktopMenuImg" />Contact Me</button> */}
        <div className='mobMenu' onClick={() => setShowMenu(!ShowMenu)}>
          <img src={Menu} alt="Menu" />
        </div>
        <div className="navMenu" style={{ display: ShowMenu ? 'flex' : 'none' }}>
          <a href='/' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Clients</a>
          <a href='/' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" >Contact</a>
        </div>
      </nav>

      <div id='Works'>
        <h2 className='Workstitle'>My Portfolio</h2>
        <span className="WorksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am exicted to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="WorksImgs">
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={Screenshot} alt="" className="WorksImg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default My_Portfolio