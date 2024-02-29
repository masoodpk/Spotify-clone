import React from 'react'

function Footer() {
  return (
    <div className='footer-container   w-full fixed h-[200px] z-10 p-3 mt-[50px] '>
       <div className="footer bg-white flex justify-between">

       
        <div className="footer-left text-black">
         <p>
            Preview of Spotify
         </p>
         <p>Sign up to get unlimitted songs and podcasts with occasional ads.No credit card needed. </p>
        </div>
        <div className="footer-right ">
            <button className='bg-white rounded-full p-3 font-bold text-black'>Sign up free</button>
        </div>
        </div>
    </div>
  )
}

export default Footer