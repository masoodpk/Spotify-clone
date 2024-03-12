
import React, { useState, useEffect } from 'react';
import './playlist.css'

import axios from 'axios';

function Playlist() {

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    async function getPlaylist() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/getplaylist', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        });
        if (response.status === 200) {
          setPlaylist(response.data.user); 
        } else {
          console.error('Failed to fetch playlist');
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    }

    getPlaylist();
  }, []); 

  return (
    <div>

<h1 className='heading'>Your Playlist</h1>
 <div className="playlist-cards">
        {playlist.map(item => (
          <div key={item._id} className="playlist-card">
            <h3>{item.name}</h3>
           

          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist