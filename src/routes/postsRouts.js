import express from "express";
import { listAllPosts, postNewPost } from "../controllers/postsControllers.js";
const routes = (app) => {
    app.use (express.json());
    app.get("/posts",listAllPosts);
    app.post("/posts",postNewPost);
    
}


export default routes;


