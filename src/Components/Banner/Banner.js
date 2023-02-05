import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="banner-buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, inventore sint obcaecati aperiam ratione, excepturi voluptatum rerum dignissimos soluta totam, dolores similique veritatis. Rem hic ad magnam aut soluta! Esse!</h1>
            <div className="fade">
                
            </div>
        </div>
    </div>
  )
}

export default Banner