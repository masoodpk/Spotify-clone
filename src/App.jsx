import React from 'react'
import Index from './Index'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import './App.css'
import axios from 'axios'


function App() {
  axios.defaults.baseURL=location.href;
  if(import.meta.env.DEV){
   axios.defaults.baseURL = "http://localhost:3007"
  }
 
  return (
    <div >
        <Index/>
       
     </div>
  )
}

export default App