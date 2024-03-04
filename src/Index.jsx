
import React, { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Playlist from './Components/playlist'
function Index() {
  const [showPlaylist, setShowPlaylist] = useState(false);

  const handleCreatePlaylist = () => {
    setShowPlaylist(true);
  };
  const handleHomeClick = () => {
    setShowPlaylist(false); // Set showPlaylist to false when Home is clicked
  };
  return (
    <div className='Container '>
    <div className="flex">
    <Sidebar onCreatePlaylist={handleCreatePlaylist} onHomeClick={handleHomeClick}/>
     <Hero showPlaylist={showPlaylist} />
     {showPlaylist && <Playlist />}
    </div>
      {/* <Footer/> */}
    

    
    </div>
  )
}

export default Index