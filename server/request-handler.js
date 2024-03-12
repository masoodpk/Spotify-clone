import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import loginModel from "./models/login.model.js";
import addsongsModel from "./models/addsongs.model.js";
import playlistModel from "./models/playlist.model.js";
import path from "path";
const { sign } = jwt;


export async function register(req, res) {
    try {
      console.log(req.body)
      let { email, username, password, confirmPassword, playlist } = req.body;
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
      // let { filename } = req.file;
      let hashedpass = await bcrypt.hash(password, 4)
      let add = loginModel.create({
        // profile: filename,
        username,
        email,
        password: hashedpass,
        confirmPassword: hashedpass,
        playlist
        
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

  export async function addsongs(req, res) {
    try {
      let { userId } = req.user;
      console.log(userId);
      // let { filename } = req.file;

      let {  title, category, } = req.body;
  
      // let profile = req.files && req.files.image ? req.files.image[0].filename : null;
      // let audio = req.files && req.files.audio ? req.files.audio[0].filename : null;
      const profile = req.files["image"][0].filename;
      const audio = req.files["audio"][0].filename;
  
      let user = await addsongsModel.create({ profile, audio, title,  category, userId});
      console.log(user);
      return res.status(201).json({
        msg: "data uploaded",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "error occured",
      });
    }
  }
  
  export async function getsongs(req, res) {
    try {
  
   let {userId} = req.user
      const user = await addsongsModel.find({ userId});
      console.log(user);
      return res.status(200).json({
        msg: "Files retrieved successfully",
        user
      });
  
      //  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Error occurred while retrieving files",
      });
    }
  };
  

  
  export async function hero(req, res) {
    try {

      const user = await addsongsModel.find();
      console.log(user);
      return res.status(200).json({
        msg: "Files retrieved successfully",
        user
      });
  
      //  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Error occurred while retrieving files",
      });
    }
  };
  

  
  export async function addplaylist(req, res) {
    try {
      let { userId } = req.user;
      console.log(userId);
      const { name} = req.body;
      console.log('Received playlist name:', name);

      let user = await loginModel.create({  playlists: name,  userId});
      console.log('Playlist created:', name);
     
      return res.status(201).json({
        msg: 'Playlist created successfully',
        user,
        playlists: name
      });
    } catch (error) {
       console.error('Error creating playlist:', error);
      return res.status(500).json({
        msg: "error occured",
      });
    }
  }


  // export async function getplaylist(req, res) {
  //   try {
  //  let {userId} = req.user
  //  const { name} = req.body;
  //     const user = await loginModel.find({ userId,  playlists: name});
  //     console.log(user);
  //     return res.status(200).json({
  //       msg: "Files retrieved successfully",
  //       user,
  //       playlists: name
  //     });
  
  //     //  
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({
  //       msg: "Error occurred while retrieving files",
  //     });
  //   }
  // };
  



  export async function getplaylist(req, res) {
    try {
       const userId = req.user.userId; // Assuming userId is correctly set in req.user
       // Assuming you want to fetch all playlists for the user
       const user = await loginModel.findOne({ userId }).select('playlists');
       if (!user) {
         return res.status(404).json({ msg: "User not found" });
       }
       return res.status(200).json({
         msg: "Files retrieved successfully",
         user: user.playlists, // Directly return the playlists array
       });
    } catch (error) {
       console.error(error);
       return res.status(500).json({
         msg: "Error occurred while retrieving files",
       });
    }
   };





export async function listplaylist (req, res) {
  try {
 
    const userId = req.user.id; 
    const user = await loginModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const playlists = user.playlists;

    res.status(200).json(playlists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

  
  // export async function addaudio(req, res) {
  //   try {
  //     let { userId } = req.user;
  //     console.log(userId);
    
  //     let user = await playlistModel.create({  userId});
  //     return res.status(201).json({
  //       msg: 'audio added',
  //       user,
  //     });
  //   } catch (error) {
  //      console.error('Error adding audio:', error);
  //     return res.status(500).json({
  //       msg: "error occured",
  //     });
  //   }
  // }
