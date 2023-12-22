import React from 'react';
import Screenshot from './assets/Screenshot.png'


function My_Portfolio() {
  return (
    <div>
        <div id='Works'>
        <h2 className='Workstitle'>My Portfolio</h2>
        <span className="WorksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am exicted to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="WorksImgs">
          <img src={Screenshot} alt="" className="WorksImg" />
          <img src={Screenshot} alt="" className="WorksImg" />
          <img src={Screenshot} alt="" className="WorksImg" />
          <img src={Screenshot} alt="" className="WorksImg" />
          <img src={Screenshot} alt="" className="WorksImg" />
          <img src={Screenshot} alt="" className="WorksImg" />
        </div>
      </div>
    </div> 
  )
}

export default My_Portfolio