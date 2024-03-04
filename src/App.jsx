import React from 'react'
import Index from './Index'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Register from './pages/register'
import Login from './pages/login';
import Addsongs from './pages/addsongs'
import Getsongs from './pages/getsongs'
import Playlist from './Components/playlist'
function App() {
  axios.defaults.baseURL=location.href;
  if(import.meta.env.DEV){
   axios.defaults.baseURL = "http://localhost:3007"
  }
 
  return (
    <div >

        {
<BrowserRouter>
<Routes>

<Route path="/" Component={Index} />
<Route path="/register" Component={Register} />
<Route path="/login" Component={Login} />
<Route path="/addsongs" Component={Addsongs} />
<Route path="/getsongs" Component={Getsongs} />
<Route path="/playlist" Component={Playlist} />



</Routes>
</BrowserRouter>


   }
     </div>
  )
}

export default App