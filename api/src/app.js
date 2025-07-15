import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id : 1,
        nome : "homem de ferro"
    },
    {
        id : 2,
        nome : "homem aranha"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("curso de node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
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

//mongodb+srv://admin:<db_password>@livraria-db.ati3muh.mongodb.net/?retryWrites=true&w=majority&appName=livraria-db