import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import {motion} from 'framer-motion';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {}

function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:shubhjoshi80@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`
    };
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'
    >
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 pt-24'>
            
            <div className='space-y-5'>
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className='text-[#985EFF] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+91-9867666116</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className='text-[#985EFF] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>shubhjoshi80@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className='text-[#985EFF] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Mumbai, India</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className="contactInput" type="text"/>
                    <input {...register('email')} placeholder='Email' className="contactInput" type="email"/>
                </div>
                <input {...register('subject')} placeholder='Subject' className="contactInput" type="text"/>
                <textarea {...register('message')} placeholder='Message' className="contactInput"/>
                <button type='submit' className='bg-[#985EFF]/30 hover:bg-[#985EFF]/50 py-5 px-10 rounded-md text-[985EFF]/80 font-bold text-lg'>Submit</button>
            </form>
        </div>
    </motion.div>
  );
}

export default Contact