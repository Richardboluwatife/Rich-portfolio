import React from 'react'
import Screenshot from './assets/Screenshot.png'

function Works() {
  return (
    <div id='Works'>
      <h2 className='Workstitle'>My Portfolio</h2>
      <span className="WorksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am exicted to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className="WorksImgs">
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
        <a href='https://richard-grilli.vercel.app/' style={{ display: 'block' }}>
          <img src={Screenshot} alt="" className="WorksImg" />
        </a>
      </div>
      {/* <button className="WorkBtn">See More</button> */}
      <a href='/portfolio' style={{ color: '#000', fontSize: '20px', padding: '10px 0', background: 'white', borderRadius: '20px', width: '150px', marginTop: '10px', textAlign: 'center' }}>See More
      </a>

      <div className="links" >
        {/* <Link to='/My_Portfolio' className='ig'>create a new account</Link> */}
      </div>
    </div>
  )
}

export default Works