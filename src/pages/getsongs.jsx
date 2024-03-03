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

    return (
        <>
            <div>
    
            <div className="card-container">
                {data.map((item, index) => (

                    <div className="card two" key={index}>

                        <img src={`${baseURL}/api/image/${item.profile}`} width={"200"} />

                        {/* <img src={`/api/image/${item.profile}`} alt={item.title} width={"200"} /> */}
                        <audio controls>
                        <source src={`${baseURL}/api/audio/${item.audio}`} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>

                        <h4>{item.title}</h4>
                      
                        <p>{item.category}</p>
                  
                    </div>
                ))}
            </div>
            </div>
<br /><br /><br />



        </>
    )
}

export default Getsongs;




