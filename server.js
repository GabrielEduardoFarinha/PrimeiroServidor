import express from "express";

const posts = [
    { id: 1, description: "test photos", images: "https://placecats.com/millie/300/150" },
    { id: 2,description: "A majestic sunset", images: "https://example.com/sunset1.jpg" },
    { id: 3,description: "A majestic over", images: "https://example.com/sunset1.jpg" },
  ];


const app = express();
app.use (express.json());

app.listen(3000, () => {
    console.log("im listing...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function searchPostsID(id) {
    return posts.findIndex((post) => {
        return post.id ===Number(id)

    })
}



app.get("/posts/:id", (req, res) => {
    const index = searchPostsID(req.params.id)
    res.status(200).json(posts[index]);
});