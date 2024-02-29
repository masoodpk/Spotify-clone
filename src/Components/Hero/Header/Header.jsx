import React from 'react'
import { SlArrowRight, SlArrowLeft} from "react-icons/sl";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='Heder-container flex justify-between  p-3 px-[50px] bg-neutral-950 '>
        <div className="header-nav-icon flex text-center   align-middle justify-center mt-3">
       
        <span className='bg-black px-[9px] rounded-full pt-2 w-[30px] h-[30px] '><SlArrowLeft size={12}/></span>
        <span className='bg-black px-[9px] rounded-full pt-2 w-[30px] h-[30px] ml-[10px]'><SlArrowRight  size={12} /></span>
        </div>
        <div className="header-button  text-center">

            <Link to="/register" className='mx-5 text-[16px] text-gray-400 font-semibold hover:text-white hover:scale-105 duration-200'>Sign up</Link>
            <button className='bg-white p-2 text-black rounded-full text-[16px] font-bold w-[100px] text-center hover:scale-105 duration-100'>Log in</button>
        </div>
        
    </div>
  )
}

export default Header