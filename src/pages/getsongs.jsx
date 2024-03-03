import axios from 'axios'
import { useState, useEffect } from 'react'

import './getsongs.css'


function Getsongs() {
    let baseURL = location.href;
    if (import.meta.env.DEV) {
        baseURL = "http://localhost:3007"
    }
    const [data, setData] = useState([]);

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
              
                console.log(res.data.user);
            })
            .catch(console.log);
    }, []);

    const playAudio = (audioUrl) => {
        const audio = new Audio(`${baseURL}/api/image/${audioUrl}`);
        audio.play();
      };
    
      console.log("data", data)
    
    

    return (
        <>
        <div>
          <div className="card-container">
            {data.map((item, index) => (
              <div className="card two" key={index}>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
                <img src={`${baseURL}/api/image/${item.profile}`} width={"200"} />
                <div className="play-button" onClick={() => playAudio(item.audio)}>▶</div>
              </div>
            ))}
          </div>
        </div>
        <br /><br /><br />
      </>
    )
}

export default Getsongs;




