import { Router } from "express";
import * as rh from "./request-handler.js";
import multer from "multer";
import auth from "./middlewares/auth.js";




const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        let date = new Date();
        let name = file.originalname;
        let namePrefix = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
        cb(null, namePrefix + name);
    }
});



const uploader = multer({ storage });
const router = Router()

router.route("/register").post(uploader.single("file"),rh.register);
router.route("/login").post(rh.login);
router.route("/image/:name").get(rh.image);
router.route("/addsongs").post(auth, uploader.fields([{ name: "image" }, { name: "audio" }]), rh.addsongs);
router.route("/getsongs").get(auth, rh.getsongs);
router.route("/hero").get(rh.hero);
router.route("/addplaylist").post(auth,rh.addplaylist)
// router.route("/addaudio").post(auth,rh.addaudio)
export default router;