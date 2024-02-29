import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'

function Index() {
  return (
    <div className='Container '>
    <div className="flex">
    <Sidebar/>
     <Hero/>
    </div>
      {/* <Footer/>
     */}
   
      
    
    </div>
  )
}

export default Index