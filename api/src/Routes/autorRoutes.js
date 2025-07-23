import express from "express";
import autorController from "../controller/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listasAutor);
routes.get("/autor/:id", autorController.listasAutorPorId)

routes.post("/autor", autorController.cadastrarAutor)

routes.put("/autor/:id", autorController.editarAutorPorId)

routes.delete("/autor/:id" , autorController.deletarAutor)

export default routes;
    

