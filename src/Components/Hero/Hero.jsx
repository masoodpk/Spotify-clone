import React from 'react'
import Header from './Header/Header'
import Card from '../Card/Card'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
function Hero() {

  return (


    
    <div className='container bg-demo mt-[10px] mr-[10px] ml-[370px] h-[100vh]  rounded-md  '>
        <Header/>
        <div className="hero-section   bg-gradient-to-b bg-neutral-900 p-3 rounded-md">

            <div className="hero-top flex justify-between px-3  align-middle">
              <h1 className='font-bold text-[25px] hover:underline duration-100 cursor-pointer'>Spotify Playlist</h1>
              <p className='text-gray-400 font-bold hover:underline duration-100 cursor-pointer mt-[10px]'>Show all</p>
            </div>
            <div className="hero-card-section flex flex-wrap ">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              
 
            </div>
          <div className="hero-list-socialMeadia mt-[50px] xl:mt-[100px] flex justify-between ">

            <div className="hero-list flex  ml-[30px] text-gray-400">
               <ul className='list-1'>
                <li><h1 className='font-bold text-white'>Company</h1></li>
                <li className='mt-[10px]'>About</li>
                <li>Jobs</li>
                <li>for the Record </li>
               </ul>

               <ul className="list-2 ml-[130px] md:ml-[80px]">
                <li><h1 className='font-bold text-white'>Communities</h1></li>
                <li className='mt-[10px]'></li>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors </li>
                <li>vendors</li>
               </ul>
               <ul className="list-3 lg:ml-[130px] md:ml-[80px]">
                <li><h1 className='font-bold text-white mb-[10px]'>Useful links</h1></li>
                
                <li>Suport</li>
                <li>Free Mobile App</li>
                

               </ul>
            </div>

            <div className="hero-scocial-icons mr-[20px]">
                <ul className='flex lg:flex lg:flex-row md:flex md:flex-col'>
                  <li className='bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100 ml-[10px]'><FaInstagram size={20}/></li>
                  <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaTwitter size={20}/></li>
                  <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaFacebook size={20}/></li>
                </ul>

            </div>
          </div>

         <div className="hero-botom mt-[30px] px-[50px]">
          <div className="content  border-t-2 border-neutral-800 flex text-neutral-500 ">
             <span className='mt-[57px] mr-[5px]'><FaRegCopyright  size={12}/></span>
            <h1 className=' mt-[50px] font-bold'>2024 Spotify AB</h1>
          </div>
         </div>

        </div>
        </div>
  )
}

export default Hero