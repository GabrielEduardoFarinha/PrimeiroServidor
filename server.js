import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    { id: 1, description: "test photos", images: "https://placecats.com/millie/300/150" },
    { id: 2,description: "A majestic sunset", images: "https://placecats.com/millie_neo/300/200" },
    { id: 3,description: "A majestic over", images: "https://placecats.com/millie/300/150" },
  ];


const app = express();
app.use (express.json());

app.listen(3000, () => {
    console.log("im listing...");
});

async function getAllPosts(){
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

app.get("/posts", async (req, res) => {
    const posts = await getAllPosts()
    res.status(200).json(posts);
});

//function searchPostsID(id) {
//    return posts.findIndex((post) => {
//        return post.id ===Number(id);
//
//    })
//};
//
//
//
//app.get("/posts/:id", (req, res) => {
//    const index = searchPostsID(req.params.id)
//    res.status(200).json(posts[index]);
//});