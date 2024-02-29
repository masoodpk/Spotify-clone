

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import Spotify from "../assets/Spotify.svg"
function Register() {
    const [state, setState] = useState(null);
    const [image, setImage] = useState("");
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            profile:""
   
        },
        validate: registerValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.append("username", values.username);
                formData.append("email", values.email);
                formData.append("password", values.password);
                formData.append("confirmPassword", values.confirmPassword);
                formData.append("file", document.querySelector("#file").files[0]);  

                let res = await axios.post("/api/register", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                if (res.status === 201) {
                    toast.success(res.data.msg);
                    navigate("/login", { replace: true });
                }
            }
            catch (error) {
                toast.error(error.response.data.msg);
            }
        }
    });

    
  
    return (
        <>
            <Toaster />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='signup-box'>
                            <h2 className='text-center three'>Sign up to start <br />listening</h2>
                            <form className='formBox' onSubmit={formik.handleSubmit} >
                                <div className="form-group">
                                    <input {...formik.getFieldProps("username")} type="text" className="form-control" name="username" id="username" placeholder="Username" />
                                    {formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
                                </div>
                                <div className="form-group">
                                    <input {...formik.getFieldProps("email")} type="email" className="form-control" name="email" id="email" placeholder="Email address" />
                                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                                </div>
                                <div className="form-group">
                                    <input {...formik.getFieldProps("password")} type="password" className="form-control" id="password" placeholder="Password" />
                                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                </div>
                                <div className="form-group">
                                    <input {...formik.getFieldProps("confirmPassword")} type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                    {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                                </div>
         <input type="file"  name="file" id="file" placeholder="file"/>
                                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                            </form>
                            <p className="mt-3 text-center">Already have an account? <Link className="link" to={"/login"}>Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={Spotify} alt="Logo" className="logo" />
        </>
    )
}

export default Register;

function registerValidate(values) {
    let errors = {};
    if (values.email.length < 4) {
        errors.email = "Please enter a valid email";
    }
    if (values.username.length < 4) {
        errors.username = "Please enter a valid username";
    }
    if (values.password.length < 4) {
        errors.password = "Please enter a valid password";
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }
    return errors;
}
