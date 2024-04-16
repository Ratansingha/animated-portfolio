import React, { useRef } from 'react'
import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
  {
    id: 1,
    title: "React js Portfolio",
    img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    des:"this the girgite pic so beautiful animal in the world and its very rare animal you cant see it any where with out limitation place"
  },
  
  {
    id: 2,
    title: "React js Ecommerce",
    img: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    des:"this the girgite pic so beautiful animal in the world and its very rare animal you cant see it any where with out limitation place"
  },
  {
    id: 3,
    title: "React js Blog App",
    img:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    des:"this the girgite pic so beautiful animal in the world and its very rare animal you cant see it any where with out limitation place"
  },
  {
    id: 4,
    title: "React js Social Media App",
    img: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
    des:"this the girgite pic so beautiful animal in the world and its very rare animal you cant see it any where with out limitation place"
  },
  {
    id: 5,
    title: "React js Booking App",
    img: "https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=600",
    des:"this the girgite pic so beautiful animal in the world and its very rare animal you cant see it any where with out limitation place"
  },

]

const Single = ({ item }) => {

  const ref = useRef();

    const { scrollYProgress } = useScroll({
    target: ref,
    });
  
  const y = useTransform(scrollYProgress,[0,1],[-300,300])
  
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer"  ref={ref}>
            <img src={item.img} alt="" />
            </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.des}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
      </div>
    </section>
  )
};

const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX,}} className="progressBar" ></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
