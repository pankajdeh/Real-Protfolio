import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Portfolio.css'



const ProtfolioItem = ({ item }) => {
  return (
    <Tilt>
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
    <a href={item.link} className=" button i-button work__button">Demo <i className='bx bx-right-arrow-alt work__button-icon'></i></a>
    
    </div>
    </Tilt>
  )
}

export default ProtfolioItem