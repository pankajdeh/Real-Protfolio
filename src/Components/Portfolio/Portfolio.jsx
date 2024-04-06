import React from 'react'
import './Portfolio.css'
// import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
// import Sidebar from '../../img/sidebar.png'
// import Ecommerce from '../../img/ecommerce.png'
// import MusicApp from '../../img/musicapp.png'
// import HOC from '../../img/hoc.png'
import {themeContext} from '../../Context'
import {useContext} from "react"
import Works from './Works'

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="work__section" id='Portfolio'>
        {/*Heading*/}
        <h2  className='section__title' style={{color: darkMode? 'white':''}}>Projects</h2>
        <span className='section__subtitle'  >Most Recent Works</span>

        <Works/>



        {/*slider*/}
        {/* <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper> */}
    </div>
  )
}

export default Portfolio

