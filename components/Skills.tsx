import React from 'react'
import {motion} from "framer-motion"
import Skill from "./Skill";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <div className='grid grid-cols-4 gap-5 pt-20'>
        <Skill url='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/html-1.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/css-3.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/python-5.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/c-1.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/c.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/java-4.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/golang-1.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/react-2.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/django.svg'/>
            {/* <Skill url='https://cdn.worldvectorlogo.com/logos/flask.svg'/> */}
            <Skill url='https://user-images.githubusercontent.com/62555809/192743367-8cfbebed-7045-41d0-8b06-c4527d654007.png'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/mysql-6.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/firebase-1.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/git-icon.svg'/>
            <Skill url='https://cdn.worldvectorlogo.com/logos/heroku-4.svg'/>
        </div>
    </motion.div>
  )
}

export default Skills