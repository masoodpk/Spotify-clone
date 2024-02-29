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



  export async function login(req, res) {
    console.log(req.body);
    try {
      let { username, password } = req.body;
  
      let user = await loginModel.findOne({ username });
      if (!user) {
        return res.status(400).json({
          msg: "invalid username or password!"
        })
      }
  
      let Valid = await bcrypt.compare(password, user.password);
      if (Valid) {
        let token = await sign({
          username: user.username,
          userId: user._id}
         , process.env.SECRET_KEY, {
          expiresIn: "24h"
        });
        return res.status(201).json({
          msg: "login successful",
          token,user
        })
      }
      return res.status(400).json({
        msg: "invalid username or password"
      })
    } catch
    (error) {
      console.log(error);
      return res.status(500).json({
        msg: "error occured"
      });
    }
  }

  
  export async function image(req, res) {
    try {
      let { name } = req.params;
      return res.sendFile(path.resolve(`./uploads/${name}`))
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Error occurred while retrieving files",
      });
    }
  };