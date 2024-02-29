import React from 'react'
import Index from './Index'
import Footer from './Components/Footer/Footer'



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