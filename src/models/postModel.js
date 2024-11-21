import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts(){
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function createPost(newPost){
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.insertOne(newPost)

}