import React, { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import { BsSpotify } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { SlSocialSpotify } from "react-icons/sl";
import { LuPlus } from "react-icons/lu";
import spIcon from '../../assets/Spotify.svg'
import { Link } from 'react-router-dom';
function Sidebar({ onCreatePlaylist,  onHomeClick }) {

 const [scrolling ,setScrolling] = useState(false)
 const [showPlaylistPage, setShowPlaylistPage] = useState(false);
 useEffect(()=>{
  const handleScroll=()=>{
    if(window.screenY >50){
      setScrolling(true)
    }else{
      setScrolling(false)
    }
  }
  window.addEventListener('scroll',handleScroll)

 },[])



const handleHomeClick = () => {
  onHomeClick(); 
};


 const header =`flex p-3 justify-between ${scrolling && 'shadow-black shadow-md'}`

  return (
    <div className='sidebar-container pl-[10px] w-[450px] md:w-[400px] sm:w-[250px] lg:w-[400px]  fixed h-[100vh]  '>

        <div className="sidebar-top  bg-demo w-[350px] h-[160px] mt-[10px] mb-[10px]  rounded-md px-[20px] pt-[15px]">
         <ul className='text-white flex flex-col '>
          
           <li className='flex font-bold '> <span className='mr-[2px] '><BsSpotify size={23}/></span>Spotify</li>
            <li className='flex mt-[25px] font-bold ' onClick={handleHomeClick}> <span className=' mr-[15px] mt-[-5px]'><GoHomeFill size={30}/></span>Home</li>
          




            <li className='flex mt-[25px] font-bold text-gray-400 hover:text-white duration-150 cursor-pointer'> <span className=' mr-[15px] mt-[-5px]'><CiSearch size={30}/></span>Search</li>
           
            

         </ul>
        </div>

        <div className="sidebar-middle bg-demo w-[350px]  rounded-md">

            <div className={header}>

              <div className="sidebar-header-left flex text-gray-400  cursor-pointer hover:text-white duration-150">

              <span className='mr-[10px] '><LuLibrary size={25} /></span><h1 className='text-[18px] font-medium  '>Your Library</h1>
              </div>
            

              <div  className="sidebar-header-right hover:bg-black duration-75 rounded-full p-1 cursor-pointer text-gray-400">
                <LuPlus size={25} />
              </div>
            </div>

            <div className="sidebar-midile h-[200px] overflow-y-scroll   p-3">




              <div className="midle-tile-1  bg-bgclr h-[150px] rounded-lg mt-[10px] py-[15px] px-[20px]">
                  <h1 className='font-medium text-[18px]'>Create your first playlist</h1>
                  <p className='font-medium'>its easy,we will help you</p>
                  <button onClick={onCreatePlaylist}  className='py-2 px-3 bg-white text-black rounded-3xl mt-[25px] font-bold hover:scale-105 duration-100 text-[14px]'>Create playlist</button>
{/*           
             <Link to="/playlist">
            <button className='py-2 px-3 bg-white text-black rounded-3xl mt-[25px] font-bold hover:scale-105 duration-100 text-[14px]'>
              Create playlist
            </button>
          </Link> */}
          
          
          
              </div>
              <div className="midle-tile-2 bg-bgclr h-[150px] rounded-xl mt-[20px] py-[15px] px-[20px]">
              <h1 className='font-medium text-[18px]'>Lets find some podcasts to follow</h1>
                  <p className='font-medium'>we will keep you updated on new episodes</p>
                  <button className='py-2 px-3 bg-white text-black rounded-3xl mt-[25px] font-bold hover:scale-105 duration-100 text-[14px]'>Browse podcasts</button>
              </div>
              
            </div>

            <div className="sidebar-bottom p-[30px] lg:mt-[50px] h-[100vh] text-gray-400">

                     <ul className='flex md:mt-[0px]'>
                      <li className='text-[12px]'>Legal</li>
                      <li className='text-[12px] ml-[10px]'>Saftey & Privacy Center</li>
                      <li className='text-[12px] ml-[10px]'>Privacy Policy</li>
                      <li className='text-[12px] ml-[10px]'>Cookies</li>
                      <br />
                     
                     
                     </ul>
                     <ul className='flex mt-[10px]'>
                     <li className='text-[12px] '>About Ads</li>
                     <li className='text-[12px] ml-[10px]'>Accesssibility</li>
                     </ul>


                     <ul className="flex mt-[10px]">
                      <li className="text-[12px]">Cookies</li>
                     </ul>

                     <button className='mt-[30px] flex rounded-full border border-gray-400 px-4 hover:scale-105 duration-100  text-white hover:border-white font-medium py-1'> <span className='mt-[3px] mr-[5px] text-white'><PiGlobeSimpleBold size={20}/></span> English</button>
                      </div>
        </div>
          


    </div>
  )
}

export default Sidebar