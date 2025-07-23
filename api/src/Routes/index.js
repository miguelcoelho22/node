import express from "express";
import livros from "./livroRoutes.js"
import autores from "./autorRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node"));

    app.use(express.json(), livros)
    app.use(express.json(), autores)
}

export default routes;

