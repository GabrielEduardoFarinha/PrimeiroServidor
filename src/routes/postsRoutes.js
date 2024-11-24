import express from "express";
import multer from "multer";
import fs from "fs"; 
import path from "path";
import { listAllPosts, postNewPost, uploadImage, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads", storage })

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listAllPosts);
    app.post("/posts", postNewPost);
    app.post("/upload", upload.single("image"), uploadImage);
    app.put("/upload/:id", atualizarNovoPost);
    app.get("/Uploads", (req, res) => {
        fs.readdir('uploads', (err, files) => {
            if (err) {
                return res.status(500).send('Erro ao ler a pasta uploads');
            }
            res.json(files);
        });
    });
};

export default routes;