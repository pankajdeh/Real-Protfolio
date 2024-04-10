import React from 'react'
import './Intro.css';
import Github from '../../img/github.png'
import Linkdein from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
       
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hey! I Am</span>
            <span>Pankaj Dehariya</span>
            <span>Software developer with high level of experience in web designing and development, producing the 
                Quality work. <br/><br/> Software developer with high level of experience in web designing and development, producing the 
                Quality work. </span>
               
                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/pankajdeh"><img src={Github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/pankaj-dehariya/"><img src={Linkdein} alt=""/></a>
                    <a href=""><img src={ Instagram} alt=""/></a>
                    
                </div>
        </div>
       <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={{transition}}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={{transition}}
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{left: '9%', top: '18%'}}
            whileInView={{left: '0rem'}}
            transition={{transition}}
            style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            {/*blur divs*/}
            <div className="blur" style={{background: "rgb(238 210 255)"}}> </div>
            <div className="blur" style={{background: "rgb(193 245 255)", top:"17rem", width:"21rem", height:"11rem",left:"-9rem"}}></div>
       </div>
    </div>
  )
}

export default Intro
