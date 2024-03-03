import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import React from 'react';
import './getsongs.css'


function Getsongs() {
    let baseURL = location.href;
    if (import.meta.env.DEV) {
        baseURL = "http://localhost:3007"
    }
    const [data, setData] = useState([]);
    const [audioStates, setAudioStates] = useState({});
    const audioRefs = useRef([]);
    useEffect(() => {
        let token = localStorage.getItem("token")
        axios.get("/api/getsongs", {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`

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
        const audioRef = audioRefs.current[index].current;
        if (!audioRef) return;

        const isPlaying = !audioRef.paused;

        if (isPlaying) {
            audioRef.pause();
        } else {
            audioRef.play();
        }

        const newAudioStates = [...audioStates];
        newAudioStates[index] = !isPlaying;
        setAudioStates(newAudioStates);
    };

    return (
        <>
        <div>
          <div className="card-container">
            {data.map((item, index) => (
              <div className="card two" key={index}>
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
        <br /><br /><br />
      </>
    )
}

export default Getsongs;




