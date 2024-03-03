

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import Spotify from "../assets/Spotify.svg"
function Login() {
    const [state, setState] = useState(null);
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
   
        },
        validate: registerValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                let res = await axios.post("/api/login", { ...values })
                if (res.status === 201) {
                    toast.success(res.data.msg);
            
                    localStorage.setItem("token", res.data.token);
               
                    navigate("/", { replace: true });
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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='signup-box-login'>
                            <h2 className=' loginone'>Log in to Spotify</h2>
                            <form className='formBox-login' onSubmit={formik.handleSubmit} >
                                <div className="form-group">
                                    <input {...formik.getFieldProps("username")} type="text" className="form-control login" name="username" id="username" placeholder="Username" />
                                    {formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
                                </div>
                          
                                <div className="form-group">
                                    <input {...formik.getFieldProps("password")} type="password" className="form-control login" id="password" placeholder="Password" />
                                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                </div>
                            
                                <input type="submit" className="btn btn-primary bttn btn-block" value="Log In " />
                            </form>
                            <p className=" logintwo">Don't have an account? <Link className="link" to={"/register"}>sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={Spotify} alt="Logo" className="logoo" />
        </>
    )
}

export default Login;

function registerValidate(values) {
    let errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.length < 4) {
        errors.username = "Username must be at least 4 characters long";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 4) {
        errors.password = "Password must be at least 4 characters long";
    }
   
    return errors;
}
