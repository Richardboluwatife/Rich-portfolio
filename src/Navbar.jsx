import React, { useState } from 'react'
import Logoo from './assets/Logoo.png'
import { Link } from 'react-scroll'
import Menu from './assets/Menu.png'

function Navbar() {
    const [ShowMenu, setShowMenu] = useState(false)
    return (
        <nav className="Navbar">
            <div className='logo'>
                <img src={Logoo} alt="logo" />
            </div>
            <div className="desktopMenu">
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='Clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('Contact').scrollIntoView({ behavior: "smooth" });
            }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJS1ROVmsjuVOt1KXqoxHlxs1E3Bq4uSv_lvAR_g_UsSQG9Pl" alt="" className=" desktopMenuImg" />Contact Me</button>

            <div className='mobMenu' onClick={()=>setShowMenu(!ShowMenu)}>
                <img src={Menu} alt="Menu" />
            </div>
            <div className="navMenu" style={{ display: ShowMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='Clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" >Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar