import React from 'react'
import Intro from './Intro'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'
import Footer from './Footer'
// import Clients from './Clients'

const Home = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Works />
            {/* <Clients/> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home