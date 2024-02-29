import express from "express";

import conn from "./connection.js"


const app=express();





conn().then(()=>{
    app.listen(process.env.PORT, (error)=>{
        if(error){
            console.log(error);
        }
        console.log(`server started ${process.env.PORT}`);
    })
})
.catch(error=>{
    console.log(error);
})