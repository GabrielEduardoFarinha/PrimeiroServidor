import express from "express";
import multer from "multer";
import { listAllPosts, postNewPost, uploadImage } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads" , storage})

const routes = (app) => {
    app.use (express.json());
    app.get("/posts",listAllPosts);
    app.post("/posts",postNewPost);
    app.post("/upload", upload.single("image"), uploadImage);

    
}

export default routes;


