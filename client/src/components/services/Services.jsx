import React, { useRef } from 'react';
import "./services.scss";
import { motion ,useInView } from "framer-motion";

const variant = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
 
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='service'
      variants={variant}
      initial="initial" 
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="textContainer" variants={variant}>
        <p>I focus on helping your brand grow <br />and move forward</p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variant}>
        <div className="title">
          <img src="../../../assets/people.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique Ideas</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>business</h1>
          <motion.button whileTap={{background:"yellow", color:"red"}} >What We Do?</motion.button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variant}>
        <motion.div className="box"
          whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, accusantium ipsum quas quos nostrum nisi quo est nihil veniam fugit ab pariatur provident. Velit autem cum unde maxime adipisci minus assumenda exercitationem.</p>
          <motion.button whileTap= {{background:"yellow", color:"red"}} >Go</motion.button>
        </motion.div>

        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, accusantium ipsum quas quos nostrum nisi quo est nihil veniam fugit ab pariatur provident. Velit autem cum unde maxime adipisci minus assumenda exercitationem.</p>
          <motion.button whileTap= {{background:"yellow", color:"red"}}>Go</motion.button>
        </motion.div>

        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, accusantium ipsum quas quos nostrum nisi quo est nihil veniam fugit ab pariatur provident. Velit autem cum unde maxime adipisci minus assumenda exercitationem.</p>
          <motion.button whileTap= {{background:"yellow", color:"red"}}>Go</motion.button>
        </motion.div>

        <motion.div className="box"  whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, accusantium ipsum quas quos nostrum nisi quo est nihil veniam fugit ab pariatur provident. Velit autem cum unde maxime adipisci minus assumenda exercitationem.</p>
          <motion.button whileTap= {{background:"yellow", color:"red"}}>Go</motion.button>
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Services
