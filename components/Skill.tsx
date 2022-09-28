import React from 'react'
import {motion} from "framer-motion"

type Props = {
    directionLeft?:boolean;
    url?:string;
}

function Skill({directionLeft, url}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200:200,
                opacity: 0,
            }}    
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            src={url}
            
            alt=""
            className='object-contain w-12 h-12 md:w-16 md:h-16 filter group-hover:grayscale transition furation-300 ease-in-out '
        />

    </div>
  )
}

export default Skill