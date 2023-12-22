import React from 'react'
import remove from './assets/Logo-removebg.png'
import btnimg from './assets/download-removebg-preview.png'

function Intro() {
    return (
        <section id="Intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Richard</span> <br /> Full Stack Developer</span>
                <p className="introPara">I am a skilled web developer with experience in creating <br /> visually appealing and user friendly websites. </p>
                {/* <Link><button className="btn"><img src={btnimg} alt="" className="btnimg" />Hire Me</button></Link> */}
                <a href='https://www.linkedin.com/in/fadare-richard-99768428b/' style={{ color: '#000', fontSize: '20px', padding: '10px 0', background: 'white', borderRadius: '20px', width: '150px', marginTop: '10px', textAlign: 'center' }}><img src={btnimg} alt="" className="btnimg" />Hire Me
                </a>
            </div>
            <div className='bg'>
                <img src={remove} alt="" />
            </div>
        </section>
    )
}

export default Intro