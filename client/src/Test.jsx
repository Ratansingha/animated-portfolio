import React, { useState } from 'react'
import {motion} from "framer-motion"
const Test = () => {

    const variant = {
        visible: (i)=>( {
            opacity: 1,
            x: 100,
            transition: { delay:i * 0.5 },
        }),
        hidden: { opacity: 0 },
    }
    const items= [
        "item1","item2","item3","item4"
    ]
    return (
        <div className='course'>
            <motion.ul initial="hidden" animate="visible" variants={variant}>
                {items.map((item,i) => (
           <motion.li variants={variant} key={item} custom={i}>
                    {item}
            </motion.li>
                ))}
             
      </motion.ul>
        </div>
    );
};

export default Test
