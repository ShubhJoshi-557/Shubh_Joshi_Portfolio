import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}    
    transition={{
        duration:2.5,
    }}
    className='relative flex justify-center items-center'
    >
        <div className='absolute border border-[#985EFF] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#995eff15] rounded-full h-[250px] w-[250px] mt-52' />
        <div className='absolute border border-[#985EFF15] rounded-full h-[450px] w-[450px] mt-52' />
        <div className='absolute border border-[#ff5ebf] opacity-5 rounded-full h-[550px] w-[550px] mt-52 animate-pulse' />
        <div className='absolute border border-[#985EFF15] rounded-full h-[750px] w-[750px] mt-52' />
    </motion.div>
  )
}

export default BgCircles