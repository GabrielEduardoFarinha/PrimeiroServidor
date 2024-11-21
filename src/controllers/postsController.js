import {getAllPosts, createPost,  } from "../models/postModel.js";
import fs from "fs";
export async function listAllPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function postNewPost(req, res){
    const newPost = req.body;
    try {
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Error":"failed connection"})

    }
}
export async function uploadImage(req, res) {
    try {
        

        const newPost = {
            description: "",
            imgUrl: req.file.originalname,
            alt: ""
        };

        const postCreated = await createPost(newPost);
        const imgatt = `uploads/${postCreated.insertedId}.png`
        fs.renameSync(req.file.path, imgatt);
        return res.status(200).json(postCreated);
    } catch (erro) {
        console.error(erro.message);
        if (erro.code === 11000) {
            return res.status(400).json({ "Error": "Duplicate key error: Post already exists." });
        }
        return res.status(500).json({ "Error": "failed connection" });
    }
}