import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listasLivros);
routes.get("/livros/:id", LivroController.listasLivroPorId)

routes.post("/livros", LivroController.cadastrarLivro)

routes.put("/livros/:id", LivroController.editarLivroPorId)

routes.delete("/livros/:id" , LivroController.deletarLivro)

export default routes;
    

