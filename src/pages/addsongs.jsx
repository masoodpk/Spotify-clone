import axios from "axios";
import {useFormik} from "formik";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import './addsongs.css'

function Addsongs(){
    const  navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            title:"",
            category:"",
            image: null,
            audio: null,
           
           
        },
        validate: () => {},
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value) => {
            try {
              let formData = new FormData();
              formData.append("title", value.title);
              formData.append("category", value.category)
              formData.append("image", value.image);
              formData.append("audio", value.audio);
        
              formData.append("image", document.querySelector("#image").files[0]); 
              formData.append("audio", document.querySelector("#audio").files[0]); 
                let res = await axios.post("/api/addsongs",formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
                });
                console.log(res);
                if(res.status == 201){
                    toast.success(res.data.msg);
                 
                    // navigate("/",{ replace: true});
                }
            }catch(error){
                toast.error(error.response.data.msg);
            }
        }
    });


    const handleImageChange = (event) => {
        formik.setFieldValue("image", event.currentTarget.files[0]);
      };
    
      const handleAudioChange = (event) => {
        formik.setFieldValue("audio", event.currentTarget.files[0]);
      };

return(


    <div>
       <Toaster />
     
       <div className="cardi">

      
<form onSubmit={formik.handleSubmit}   method="post" encType="multipart/form-data">
<div className="form-groupii">
        <input type="file" name="image" id="image" placeholder="image"  accept="image/*"      onChange={handleImageChange} />
        <input type="file" name="audio" id="audio" placeholder="audio"  accept="audio/*"      onChange={handleAudioChange}/>
        </div>
        <div className="form-groupii">
        <input {...formik.getFieldProps("title")} type="text"  className="form-control" name="title" id="title" placeholder="title" />
        </div>
        <div className="form-groupii">
        <input  {...formik.getFieldProps("category")} className="form-control" id="category" type="text" name="category" placeholder="category" /> 
        </div>
     
        <input type="submit" value="upload"  className="btn btn-secondary"  />
      
      </form>


<a href="/myProduct">My Products</a><br />
<a href="/">Home</a>


</div>





    </div>
)


}
export default Addsongs;


