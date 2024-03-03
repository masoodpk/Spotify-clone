
import React, { useState, useEffect } from 'react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsLoggedIn(true);


    } else {
      setIsLoggedIn(false);
      
    }
  },
   []);

   const handleLogout = () => {
    localStorage.removeItem("token");
    const cnf = window.confirm("Are you sure you want to logout?");
    if (cnf) {
      return navigate("/");
    }
  };

    

    
  return (
    <div className='Heder-container flex justify-between p-3 px-[50px] bg-neutral-950 '>
      <div className="header-nav-icon flex text-center align-middle justify-center mt-3">
        <span className='bg-black px-[9px] rounded-full pt-2 w-[30px] h-[30px] '><SlArrowLeft size={12}/></span>
        <span className='bg-black px-[9px] rounded-full pt-2 w-[30px] h-[30px] ml-[10px]'><SlArrowRight  size={12} /></span>
      </div>
      <div className="header-button text-center">

        {isLoggedIn ? (
          <>
            {/* <Link to="/getsongs" className='mx-5 text-[16px] text-gray-400 font-semibold hover:text-white hover:scale-105 duration-200'>get songs</Link> */}
          {/* <Link to="/addsongs" className='mx-5 text-[16px] text-gray-400 font-semibold hover:text-white hover:scale-105 duration-200'>Add Songs</Link> */}
          <button  onClick={handleLogout} className='bg-white p-2 text-black rounded-full text-[16px] font-bold w-[100px] text-center hover:scale-105 duration-100'>Log out</button>
          </>
        ) : (
          <>
            <Link to="/register" className='mx-5 text-[16px] text-gray-400 font-semibold hover:text-white hover:scale-105 duration-200'>Sign up</Link>
            <Link to="/login" className='bg-white p-2 text-black rounded-full text-[16px] font-bold w-[100px] text-center hover:scale-105 duration-100'>Log in</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
