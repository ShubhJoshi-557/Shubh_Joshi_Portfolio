import React from 'react'
import {motion} from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return( 
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px 10 justify-evenly mx-auto items-center p-8'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                duration:1.2,
            }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] m-5"
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            src="https://user-images.githubusercontent.com/62555809/192535601-08108897-2d94-45ae-8b1b-e01020a2536a.jpg"
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                A {" "}<span className='text-[#985EFF]/60'>little</span>{" "} Background
            </h4>
            <p className='text-base'> I'm Shubh Joshi, pursuing a bachelor's in Computer Science Engineering at St Francis Institute of Technology, Mumbai. I build web apps for Fun. I’m currently learning MERN Stack. I like to play Video Games and watch Movies when I am free.</p>
        </div>
    </motion.div>
  );
}