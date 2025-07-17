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

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id",async (req, res) => {
    const livroId = await livro.findById(req.params.id);
    res.status(200).json(livroId);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].nome = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice[index, 1];
    res.status().send("livro deletado")
})

export default app;

