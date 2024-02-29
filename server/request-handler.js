import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import loginModel from "./models/login.model.js";

import path from "path";
const { sign } = jwt;


export async function register(req, res) {
    try {
      console.log(req.body)
      let { email, username, password, confirmPassword } = req.body;
      console.log(req.body);
  
      if (!email || !username || !password || !confirmPassword) {
        return res.status(400).json({
          msg: "username,email,password cannot be empty!"
        })
      }
  
      let userExist = await loginModel.findOne({ username });
      if (userExist) {
        return res.status(400).json({
          msg: "user already exist"
        })
      }
      let { filename } = req.file;
      let hashedpass = await bcrypt.hash(password, 4)
      let add = loginModel.create({
        profile: filename,
        username,
        email,
        password: hashedpass,
        confirmPassword: hashedpass,
     
        
      });
      console.log(add);
      return res.status(201).json({
        msg: "register successfull"
      })
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "error occured"
      })
    }
  }
