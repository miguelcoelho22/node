import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
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

export default app;

