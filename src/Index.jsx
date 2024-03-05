
import React, { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Playlist from './Components/playlist'
function Index() {
  const [showPlaylist, setShowPlaylist] = useState(false);


  const handleLibraryClick = () => {
    setShowPlaylist(true);
  };
  const handleHomeClick = () => {
    setShowPlaylist(false); 
  };
  return (
    <div className='Container '>
    <div className="flex">
    <Sidebar onLibraryClick={handleLibraryClick}  onHomeClick={handleHomeClick}/>
     <Hero showPlaylist={showPlaylist} />
     {/* {showPlaylist && <Playlist />} */}
    </div>
      {/* <Footer/> */}
    

    
    </div>
  )
}

export default Index

