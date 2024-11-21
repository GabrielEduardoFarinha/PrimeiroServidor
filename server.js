import express from "express";
import routes from "./src/routes/postsRouts.js";

const app = express();
routes(app)

app.listen(3000, () => {
    console.log("im listing...");
});



