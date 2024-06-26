// import React from 'react'
// import Header from './Header/Header'
// import Card from '../Card/Card'
// import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
// import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa";
// // import Getsongs from '../../pages/getsongs';
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import './hero.css'
// import Playlist from '../playlist';

// import { FaPlus } from 'react-icons/fa';

// function Hero({ showPlaylist,children }) {
//   let baseURL = location.href;
//   if (import.meta.env.DEV) {
//     baseURL = "http://localhost:3007"
//   }
//   const [data, setData] = useState([]);
//   const [audioStates, setAudioStates] = useState({});
//   const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
//   const audioRefs = useRef([]);
//   const audioRef = useRef(null);
//   const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {

//     axios.get("/api/hero", {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       }
//     })
//       .then(res => {
//         console.log(res.data);
//         setData(res.data.user)
//         setAudioStates(new Array(res.data.user.length).fill(false));
//         audioRefs.current = new Array(res.data.user.length).fill(null).map(() => React.createRef());
//         console.log(res.data.user);
//       })
//       .catch(console.log);
//   }, []);

//   const playAudio = (audioUrl, index) => {
//     const audioRef = audioRefs.current[index]?.current;
//     if (!audioRef) return;


//     audioRefs.current.forEach((ref, idx) => {
//       if (idx !== index && ref && ref.current && !ref.current.paused) {
//         ref.current.pause();


//         setAudioStates(prevStates => {
//           const newStates = [...prevStates];
//           newStates[idx] = false;
//           return newStates;
//         });
//       }
//     });

//     const isPlaying = !audioRef.paused;

//     if (isPlaying) {
//       audioRef.pause();


//       setAudioStates(prevStates => {
//         const newStates = [...prevStates];
//         newStates[index] = false;
//         return newStates;
//       });

//     } else {
//       audioRef.play();
//       setCurrentPlayingIndex(index);
//       setAudioStates(prevStates => {
//         const newStates = [...prevStates];
//         newStates[index] = true;
//         return newStates;
//       });

//     }
//     const newAudioStates = new Array(audioStates.length).fill(false);
//     newAudioStates[index] = !isPlaying;
//     setAudioStates(newAudioStates);
//   };

//   const fetchPlaylists = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('/api/listplaylist',{
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//       });
//       setPlaylists(response.data);
//       console.log(response.data); // Assuming the response contains an array of playlists
//        // Assuming the response contains an array of playlists
//       setShowPlaylistDropdown(true);
//     } catch (error) {
//       console.error('Error fetching playlists:', error);
//     }
//   };


//   return (


//     <div className='container bg-demo mt-[10px] mr-[10px] ml-[370px] h-[100vh]  rounded-md  '>
     
//       {!showPlaylist && <Header />}


//       <div className="hero-section   bg-gradient-to-b bg-neutral-900 p-3 rounded-md">
//       {children}
//         {currentPlayingIndex !== null && (
//           <div className="audio-player" style={{ width: '100%', backgroundColor: 'black', color: '#black', padding: '10px', position: 'fixed', left: 0, bottom: 0, zIndex: 999 }}>
//             {/* <audio controls style={{ width: '100%' , color:'#333' }} src={`${baseURL}/api/image/${data[currentPlayingIndex].audio}`} ref={audioRef}/>  */}
//           </div>
//         )}
//         <div className="hero-top flex justify-between px-3  align-middle">
//           <h1 className='font-bold text-[25px] hover:underline duration-100 cursor-pointer'>Spotify Playlist</h1>
//           <p className='text-gray-400 font-bold hover:underline duration-100 cursor-pointer mt-[10px]' >Show all</p>
//         </div>
//         {showPlaylist ? (
//           <Playlist />
//         ) : (
//           <>
//             <div className="hero-card-section flex flex-wrap ">
//               {/* <Card/>
//               <Card/>
//               <Card/>
//               <Card/>
//               <Card/> */}

//               <div>
//                 <div className="card-container">
//                   {data.map((item, index) => (
//                     <div className="card two" key={index}>
//                       <div className="plus-icon-button cursor-pointer" onClick={fetchPlaylists}><FaPlus /></div>
//                       <div className="card-content">
//                         <h4 className="title">{item.title}</h4>
//                         <p className="category">{item.category}</p>
//                       </div>
//                       <img src={`${baseURL}/api/image/${item.profile}`} width={"200"} />

//                       <div className="play-button" onClick={() => playAudio(item.audio, index)}>
//                         {audioStates[index] ? "❚❚" : "▶"}
//                       </div>
//                       <audio ref={audioRefs.current[index]} src={`${baseURL}/api/image/${item.audio}`} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </>
//         )}


// {/* {showPlaylistDropdown && (
//           <div className="playlist-dropdown">
//             <ul>
//               {playlists.map((playlist, index) => (
//                 <li key={index} onClick={() => handlePlaylistSelection(playlist)}>{playlist.name}</li>
//               ))}
//             </ul>
//           </div>
//         )} */}




//         <div className="hero-list-socialMeadia mt-[50px] xl:mt-[100px] flex justify-between ">

//           <div className="hero-list flex  ml-[30px] text-gray-400">
//             <ul className='list-1'>
//               <li><h1 className='font-bold text-white'>Company</h1></li>
//               <li className='mt-[10px]'>About</li>
//               <li>Jobs</li>
//               <li>for the Record </li>
//             </ul>

//             <ul className="list-2 ml-[130px] md:ml-[80px]">
//               <li><h1 className='font-bold text-white'>Communities</h1></li>
//               <li className='mt-[10px]'></li>
//               <li>For Artists</li>
//               <li>Developers</li>
//               <li>Advertising</li>
//               <li>Investors </li>
//               <li>vendors</li>
//             </ul>
//             <ul className="list-3 lg:ml-[130px] md:ml-[80px]">
//               <li><h1 className='font-bold text-white mb-[10px]'>Useful links</h1></li>

//               <li>Suport</li>
//               <li>Free Mobile App</li>


//             </ul>
//           </div>

//           <div className="hero-scocial-icons mr-[20px]">
//             <ul className='flex lg:flex lg:flex-row md:flex md:flex-col'>
//               <li className='bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100 ml-[10px]'><FaInstagram size={20} /></li>
//               <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaTwitter size={20} /></li>
//               <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaFacebook size={20} /></li>
//             </ul>

//           </div>
//         </div>
//         <div className="music-player">
//           <audio controls style={{ width: '100%' }} src={`${baseURL}/api/image/${data[currentPlayingIndex]?.audio}`} ref={audioRef} />
//         </div>



//         <div className="hero-botom mt-[30px] px-[50px]">
//           <div className="content  border-t-2 border-neutral-800 flex text-neutral-500 ">
//             <span className='mt-[57px] mr-[5px]'><FaRegCopyright size={12} /></span>
//             <h1 className=' mt-[50px] font-bold'>2024 Spotify AB</h1>
//           </div>
//         </div>


//         {/* {showPlaylist && <Playlist data={data} baseURL={baseURL} />} */}

//       </div>



//     </div>

//   )
// }

// export default Hero








import React from 'react'
import Header from './Header/Header'
import Card from '../Card/Card'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
// import Getsongs from '../../pages/getsongs';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './hero.css'
import Playlist from '../playlist';

import { FaPlus } from 'react-icons/fa';

function Hero({ showPlaylist,children }) {
  let baseURL = location.href;
  if (import.meta.env.DEV) {
    baseURL = "http://localhost:3007"
  }
  const [data, setData] = useState([]);
  const [audioStates, setAudioStates] = useState({});
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const audioRefs = useRef([]);
  const audioRef = useRef(null);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);


  const togglePlaylistDropdown = () => {
    setShowPlaylistDropdown(prevState => !prevState);
  };

  console.log('imaplaylist',playlists)

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       handlePlaylistSelection(token);
//     }
// }, []);


const handlePlaylistSelection = async () => {
  try {
      const response = await axios.post("/api/addPlaylistDb", {
          songId: playlists.songId,
      }, {
          headers: {
              "Content-Type" : "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      });

      console.log('axiosdata', response.data);
  } catch (error) {
      console.error("Error fetching user information:", error);
  }
};

  useEffect(() => {

    axios.get("/api/hero", {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(res => {
        console.log(res.data);
        setData(res.data.user)
        setAudioStates(new Array(res.data.user.length).fill(false));
        audioRefs.current = new Array(res.data.user.length).fill(null).map(() => React.createRef());
        console.log(res.data.user);
      })
      .catch(console.log);
  }, []);

  const playAudio = (audioUrl, index) => {
    const audioRef = audioRefs.current[index]?.current;
    if (!audioRef) return;


    audioRefs.current.forEach((ref, idx) => {
      if (idx !== index && ref && ref.current && !ref.current.paused) {
        ref.current.pause();


        setAudioStates(prevStates => {
          const newStates = [...prevStates];
          newStates[idx] = false;
          return newStates;
        });
      }
    });

    const isPlaying = !audioRef.paused;

    if (isPlaying) {
      audioRef.pause();


      setAudioStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      });

    } else {
      audioRef.play();
      setCurrentPlayingIndex(index);
      setAudioStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = true;
        return newStates;
      });

    }
    const newAudioStates = new Array(audioStates.length).fill(false);
    newAudioStates[index] = !isPlaying;
    setAudioStates(newAudioStates);
  };

  const fetchPlaylists = async (songId) => {
    try {

      console.log('aim song',songId)

      const token = localStorage.getItem('token');
      const response = await axios.get('/api/listplaylist',{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });
      setPlaylists({ songId: songId, data: response.data });
      togglePlaylistDropdown(); 
      console.log(response.data); // Assuming the response contains an array of playlists
       // Assuming the response contains an array of playlists
      setShowPlaylistDropdown((prevShowPlaylistDropDown)=>prevShowPlaylistDropDown=true);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };


  return (


    <div className='container bg-demo mt-[10px] mr-[10px] ml-[370px] h-[100vh]  rounded-md  '>
     
      {!showPlaylist && <Header />}


      <div className="hero-section   bg-gradient-to-b bg-neutral-900 p-3 rounded-md">
      {children}
        {currentPlayingIndex !== null && (
          <div className="audio-player" style={{ width: '100%', backgroundColor: 'black', color: '#black', padding: '10px', position: 'fixed', left: 0, bottom: 0, zIndex: 999 }}>
            {/* <audio controls style={{ width: '100%' , color:'#333' }} src={`${baseURL}/api/image/${data[currentPlayingIndex].audio}`} ref={audioRef}/>  */}
          </div>
        )}

{showPlaylistDropdown && (
          <div className="playlist-dropdown">
            <ul>
              {playlistData.map((playlist, index) => (
                <li key={index} onClick={() => handlePlaylistSelection(playlist)}>
                  {playlist.name}
                </li>
              ))}
            </ul>
          </div>
        )}



        <div className="hero-top flex justify-between px-3  align-middle">
          <h1 className='font-bold text-[25px] hover:underline duration-100 cursor-pointer'>Spotify Playlist</h1>
          <p className='text-gray-400 font-bold hover:underline duration-100 cursor-pointer mt-[10px]' >Show all</p>
        </div>
        {showPlaylist ? (
          <Playlist />
        ) : (
          <>
            <div className="hero-card-section flex flex-wrap ">
              {/* <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/> */}

              <div>
                <div className="card-container">
                  {data.map((item, index) => (
                    <div className="card two" key={index}>
                      <div className="plus-icon-button cursor-pointer" onClick={()=>fetchPlaylists(item._id)}><FaPlus /></div>
                      <div className="card-content">
                        <h4 className="title">{item.title}</h4>
                        <p className="category">{item.category}</p>
                      </div>
                      <img src={`${baseURL}/api/image/${item.profile}`} width={"200"} />

                      <div className="play-button" onClick={() => playAudio(item.audio, index)}>
                        {audioStates[index] ? "❚❚" : "▶"}
                      </div>
                      <audio ref={audioRefs.current[index]} src={`${baseURL}/api/image/${item.audio}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </>
        )}


{console.log(showPlaylistDropdown)}
{showPlaylistDropdown && (
          <div className="playlist-dropdown">
            <ul>
              {playlists.data.map((playlist, index) => (
                <li className='cursor-pointer' key={index} onClick={() => handlePlaylistSelection(playlist)}>{playlist.playListName}</li>
              ))}
            </ul>
          </div>
        )}




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
              <li className='bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100 ml-[10px]'><FaInstagram size={20} /></li>
              <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaTwitter size={20} /></li>
              <li className='ml-[10px] bg-bgclr rounded-full p-3 hover:bg-neutral-600 duration-100'><FaFacebook size={20} /></li>
            </ul>

          </div>
        </div>
        <div className="music-player">
          <audio controls style={{ width: '100%' }} src={`${baseURL}/api/image/${data[currentPlayingIndex]?.audio}`} ref={audioRef} />
        </div>



        <div className="hero-botom mt-[30px] px-[50px]">
          <div className="content  border-t-2 border-neutral-800 flex text-neutral-500 ">
            <span className='mt-[57px] mr-[5px]'><FaRegCopyright size={12} /></span>
            <h1 className=' mt-[50px] font-bold'>2024 Spotify AB</h1>
          </div>
        </div>


        {/* {showPlaylist && <Playlist data={data} baseURL={baseURL} />} */}

      </div>



    </div>

  )
}

export default Hero





