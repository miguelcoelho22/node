import { autor } from "../models/autor.js"

class autorController{

    static async listasAutor(req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar autor`})
        }
    }

    static async listasAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const Autor = await autor.findById(id);
            res.status(200).json(autor);
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar autor`})
        }
    }

    static async cadastrarAutor(req, res) {
        try{
            const autorCadastrado = await autor.create(req.body);
            res.status(201).json({message: "autor cadastrado com sucesso", autor: autorCadastrado})
        }catch(e){
            res.status(500).json({message: `${e.message} - erro ao cadastrar autor`})
        }
    }

    static async editarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar autor`})
        }
    }

    static async deletarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor deletado"})
        }catch(e){
            res.status(500).json({message: `${e} - erro ao deletar autor`})
        }
    }
}

export default autorController;