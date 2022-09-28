import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter, Typewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:["Hi, My name is Shubh Joshi!", "Guy who loves watching Movies.", "<ButLovesToCodeMore />"], 
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BgCircles/>
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://user-images.githubusercontent.com/62555809/192536610-b3b1ba52-7c71-4d0a-8300-34f71756fc50.jpg" 
            alt=""
        /> 
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-4xl lg:text-6xl font-semibold scroll-px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#EA4C89'/>
            </h1>
        
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroBottom'>About</button>
                </Link>
                {/* <Link href="#experience">
                    <button className='heroBottom'>Experience</button>
                </Link> */}
                <Link href="#skills">
                    <button className='heroBottom'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroBottom'>Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero