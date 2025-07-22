import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/livro.js";
import routes from "./Routes/index.js"

const conexao = await conectaNaDataBase();
conexao.on("error", (erro) => {
    console.error("erro de conexao", erro)
})

conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso")
})

const app = express();
routes(app)



app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice[index, 1];
    res.status().send("livro deletado")
})

export default app;

