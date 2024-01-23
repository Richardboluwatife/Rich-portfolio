import React from 'react'
import unsplash from './assets/unsplash.jpg'

function Skills() {
    return (
        <div id='skills'>
            <span className='skillTitle'> What I do</span>
            <span className="skillDesc"> I am a Skilled and passionate wed designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JAVASCRIPT, React as well handle Backend with API, NODE.JS, and MongoDB.  </span>
            <div className="SkillBars">
                <div className="SkillBar">
                    <img src={unsplash} alt="" className="SkillBarImg" />
                    <div className="SkillBarText">
                        <h2>Website Design </h2>
                        <p>I design and develop experience that make people's lives simple!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills