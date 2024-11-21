import {getAllPosts, createPost} from "../models/postModel.js";

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