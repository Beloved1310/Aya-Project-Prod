import express from 'express'
import multer from "multer";
import {storage} from '../utilis/cloudinary-multer.js';
import { getUser } from "../controller/User/getUser.js";
import { loginUser } from "../controller/User/loginUser.js";
import { registerUser } from "../controller/User/registerUser.js";
import { deleteUser } from "../controller/User/deleteUser.js";
import { updateUser } from "../controller/User/updateUser.js";
import { getAllUsers } from "../controller/User/getAllUsers.js";
import { profilePhotoUpload } from "../controller/User/profilePhotoUpload.js";
// import {adminMiddleware} from "../middleware/jwt.js";
import {authenticateToken} from "../middleware/jwt.js";


const userRouters = express.Router();
const upload = multer({storage})


// Register User
userRouters.post("/register", registerUser)

// Login user
userRouters.post("/login", loginUser)

// get all users from
userRouters.get("/all_profiles", getAllUsers)
// userRouters.get("/all_profiles", adminMiddleware, getAllUsers)

// get user profile
userRouters.get("/profile", authenticateToken , getUser)
// userRouters.get("/profile/:id", getUser)

// delete user
userRouters.delete("/:id", deleteUser)

// update user
userRouters.put("/:id", updateUser)

userRouters.post("/profile-image",authenticateToken, upload.single("profile"), profilePhotoUpload )


export default userRouters;