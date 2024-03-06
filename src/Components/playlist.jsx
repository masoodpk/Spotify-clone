
import React, { useState, useEffect } from 'react';
import './playlist.css'

import axios from 'axios';

function Playlist() {

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    async function getPlaylist() {
      try {
        const response = await axios.get('/api/getplaylist', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
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
<ul>
        {playlist.map(item => (
          <li key={item._id}>{item.name}</li> 
        ))}
      </ul>

    </div>
  )
}

export default Playlist