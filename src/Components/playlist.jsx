import React, { useState, useEffect } from 'react';
import './playlist.css';
import axios from 'axios';

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/showPlayList', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        });
        if (response.status === 200) {
          setPlaylists(response.data.playList);        } else {
          console.error('Failed to fetch playlist');
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    }

    fetchPlaylists();
  }, []); 

  
  const togglePlaylistDropdown = () => {
    setShowPlaylistDropdown(prevState => !prevState);
  };
  const handlePlaylistItemClick = () => {
    setShowPlaylistDropdown(false);
  };

  return (
    <div>
      <h1 className='heading'>Your Playlist</h1>
      <div className="playlist-cards">
        {/* {console.log(playlists)}
        {playlists.length > 0 && (
          playlists.map((playlist, index) => (
            <h1 key={index}>{playlist.playListName}</h1>
          ))
        )} */}

<button className="toggle-playlist-btn" onClick={togglePlaylistDropdown}>
          Show Playlists
        </button>

        {/* Playlist dropdown */}
        {showPlaylistDropdown && (
          <div className="playlist-dropdown">
            <ul>
              {playlists.map((playlist, index) => (
                <li key={index} onClick={handlePlaylistItemClick}>
                  {playlist.playListName}
                </li>
              ))}
            </ul>
          </div>
        )}






      </div>
    </div>
  );
}

export default Playlist;
