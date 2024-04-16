import React from 'react'
import {motion} from "framer-motion"
import "./navBar.scss"
import SideBar from '../sideBar/SideBar'
const NavBar = () => {
  return (
    <div className='navBar'>
      <SideBar/>
      <div className="wrapper">
        
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Ratan Dev</motion.span>
        
              <div className="social">
                  <a href="#"><img src="assets/fb.png" alt="" /></a>

                  <a href="#"><img src="assets/ins.png" alt="" /></a>

                  <a href="#"><img src="assets/youtube.png" alt="" /></a>

                  <a href="#"><img src="assets/dribbble.png" alt="" /></a>
              </div>
      </div>
   </div>
  )
}

export default NavBar;
