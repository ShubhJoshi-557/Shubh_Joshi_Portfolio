import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function Projects({}: Props) {
  const projects = [
    {
      'name':"Scribbble",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192317051-817246f2-7c34-4dd6-a60f-364c48adfbd6.png",
      'demoUrl':"https://ssj-scribbble.netlify.app/posts",
      'codeUrl':"https://github.com/ShubhJoshi-557/Scribbble",
      'summary':"Scribbble is a fullstack social media web application inspired by Dribbble, made for Developers and Web Designers to share their projects and get inspiration from other's projects.",
    },{
      'name':"Image Manipulation Detector",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192792309-90b75bba-d337-4c13-9ce6-8b5280b88757.png",
      'demoUrl':"https://github.com/ShubhJoshi-557/Final_Year_Project",
      'codeUrl':"https://github.com/ShubhJoshi-557/Final_Year_Project",
      'summary':"Image Manipulation Detector is a chrome extension that detects manipulations in social media images and images on other static websites. It is an effort to tackle fake information spread through manipulated images.",
    },{
      'name':"Stonks Bot",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192793168-3ae1c73c-aa74-4f9f-aaf1-56b85207f305.png",
      'demoUrl':"https://shubhjoshi-557.github.io/Stonks-Bot-Website/",
      'codeUrl':"https://github.com/ShubhJoshi-557/Stonks-Bot",
      'summary':"Stonks bot is a Discord Bot for all the Stock Market/Crypto Enthusiasts and Day Traders. It provides Up-To-Date prices of all the major stocks enlisted globally and all the major Cryptocurrencies. Apart from that it also gives a timeseries plot of the stock/crypto price for the given duration of time. This Bot is Verified by Top.gg",
    },{
      'name':"Instagram Reels Clone",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192791941-4f25d3d7-fdcf-45ea-89f9-02e57da7a5fd.png",
      'demoUrl':"https://reels-34651.web.app/login",
      'codeUrl':"https://github.com/ShubhJoshi-557/Instagram-Reels-Clone",
      'summary':"A fullstack clone of Instagram Reels made with React and Firebase, for users to share and interact with each others' videos.",
    },{
      'name':"SsjOS",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192795988-ad6d8f5d-22a9-4d4f-9f56-944e8cc443fa.png",
      'demoUrl':"https://github.com/ShubhJoshi-557/SsjOS",
      'codeUrl':"https://github.com/ShubhJoshi-557/SsjOS",
      'summary':"SsjOS is a virtual operating system for a couple of apps that I made with GO using Fyne Framework. This project uses 2 different APIs for weather and news.",
    },{
      'name':"Sorting Visualizer",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192796800-8da7277b-5c69-475c-a4e7-68a4a6aef1db.png",
      'demoUrl':"https://shubhjoshi-557.github.io/Sorting-Visualizer/",
      'codeUrl':"https://github.com/ShubhJoshi-557/Sorting-Visualizer/",
      'summary':"A Visualizer for various sorting algorithms like BubbleSort, InsertionSort, SelectionSort, QuickSort, MergeSort. Made with HTML, CSS and Javascript.",
    },{
      'name':"Excel Clone",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192798313-34a54f2b-d7d0-4def-91a0-620c724f1b89.png",
      'demoUrl':"https://shubhjoshi-557.github.io/Excel-Clone/",
      'codeUrl':"https://github.com/ShubhJoshi-557/Excel-Clone/",
      'summary':"A clone of Microsoft Excel made with HTML, CSS and Javascript. Can be used for creating, updating and deleting '.csv' files",
    },{
      'name':"WhiteBoard",
      'imgUrl':"https://user-images.githubusercontent.com/62555809/192798773-98139856-e7af-41a6-a0a1-ffcef565ad04.png",
      'demoUrl':"https://shubhjoshi-557.github.io/Whiteboard/",
      'codeUrl':"https://github.com/ShubhJoshi-557/Whiteboard",
      'summary':"A clone of Microsoft WhiteBoard made with HTML, CSS and Javascript. Can be used for creating, updating and deleting Doodle and Notes.",
    },
  ];
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-lift md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory snap-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#985EFF]/80 z-20'>
          {projects.map((project, i) =>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-screen'>
              <motion.img 
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once:true}}
                className='max-h-[400px] pt-20'
                src={project.imgUrl} 
                alt=''
              />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-3xl font-semibold text-center'>
                  <a href={project.demoUrl}> 
                    <span className='underline decoration-[#ff5ebf]/50 hover:text-[#985EFF]'>
                      {project.name}
                    </span>{" "}
                  </a>
                  
                </h4>
                <p className='text-lg text-center md:text-left'>
                  {project.summary} <a className='text-[#ff5ebf] underline' href={project.codeUrl}>Github Repo.</a></p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#985EFF]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects;