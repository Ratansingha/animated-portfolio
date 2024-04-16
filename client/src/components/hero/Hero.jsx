import React from 'react'
import {motion} from "framer-motion"
import "./hero.scss"

const textVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren:0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat:Infinity
            
        }
    }
}
const sliderVariant = {
    initial: {
        x:0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
            staggerChildren:0.1,
        }
    },
}

const Hero = () => {
  return (
      <div className='hero'>
          <div className="wrapper">
          <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
              <motion.h2 variants={textVariant}>RATAN SINGHA</motion.h2>
              <motion.h1 variants={textVariant}>Web developer UI designer</motion.h1>
              <motion.div className="buttons" variants={textVariant}>
                  <motion.button variants={textVariant}>See the latest work</motion.button>
                  <motion.button variants={textVariant}>Contact Me</motion.button>
              </motion.div>
                  <motion.img variants={textVariant} animate="scrollButton"src="assets/scroll.png" alt="" />
          </motion.div>
          </div>
          <motion.div variants={sliderVariant} initial="initial" animate="animate"
              className="slidingTextContainer">
              Writer Content Creator Influencer
</motion.div>
   <div className="imageContainer">
      <img src="assets/ratank.png" alt="" />
          </div>
          
    </div>
  )
}

export default Hero
