import express from "express";
import { listAllPosts } from "../controllers/postsControllers.js";
const routes = (app) => {
    app.use (express.json());
    app.get("/posts",listAllPosts);
    
}


export default routes;


