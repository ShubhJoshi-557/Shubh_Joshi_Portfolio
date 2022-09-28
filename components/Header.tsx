import React from 'react'
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import { Icon } from '@iconify/react';
import Link from 'next/link'


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity:0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'
        >
            <SocialIcon url='https://github.com/ShubhJoshi-557' fgColor='grey' bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/shubhjoshi557/' fgColor='grey' bgColor='transparent'/>
            <SocialIcon url='https://www.instagram.com/__.iamssj.__/' fgColor='grey' bgColor='transparent'/>
            <SocialIcon url='https://www.facebook.com/shubh.joshi.3323/' fgColor='grey' bgColor='transparent'/>
            <a href='https://leetcode.com/shubhjoshi80/'>
                <Icon icon="simple-icons:leetcode"  color='#808080' fontSize='25px' style={{margin:'0px 5px'}} />
            </a>
         
        </motion.div>
        <motion.div 
            initial={{
                x: 500,
                opacity:0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'
        
        >
            <Link href="#contact">
                <SocialIcon
                    className='cursor-pointer'
                    network="email"
                    fgColor="grey"
                    bgColor='transparent'
                />
            </Link>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
            
        </motion.div>

    </header>
  )
}

export default Header