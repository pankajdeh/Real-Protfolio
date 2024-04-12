import React from 'react'
import './Services.css'
import HeartImoji from "../../img/heartemoji.png"
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import {themeContext} from '../../Context'
import {useContext} from "react"
import {motion} from 'framer-motion'

const Services = () => {

  const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/*left side*/}
        <div className="awesome">
            <span style={{color: darkMode? 'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>We specialize in website design, management, and chatbot services.<br /> Our goal is to empower businesses with compelling online platforms 
            <br/>
            and efficient communication tools ensuring their success in the digital world. <br /> Voluptatum, sed expedita? Nihil nemo.</span>
            <a href={Resume} download><button className='button s-button'>Download CV</button></a>
            
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
              <motion.div
               whileInView={{left: '17rem'}}
              initial={{left: '25rem'}}
              transition={{transition}}

              style={{left:'14rem'}}>
                <Card
                emoji = {HeartImoji}
                heading = {'Website Development'}
                detail = {"HTML5,CSS3, JavaScript, React, Nodejs, MongoDb and Express, Wordpress,etc"}
                />
              </motion.div>

              {/*second card */}
              <motion.div 
              initial={{left: '-11rem', top: '12rem'}}
              whileInView={{left: '-4rem'}} 
              transition={{transition}}

              style={{top: "12rem",left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Website Design'}
                detail = {"Figma, Canva, Photoshop, Wix web Design, etc"}
                />
              </motion.div>

               {/*3rd card */}
               <motion.div 
               
               initial={{top: '19rem', left: '25rem' }}
              whileInView={{left: '12rem'}} 
              transition={{transition}}
               
               style={{top: "19rem",left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'ChatBots'}
                detail = {"Highlevel, Voiceflow, Botpress, etc"}
                />
              </motion.div>
              <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services