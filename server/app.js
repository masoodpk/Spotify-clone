import express from "express";




const app=express();





then(()=>{
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