import livro from "../models/livro.js";

class LivroController{

    static async listasLivros(req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar livro`})
        }
    }

    static async listasLivroPorId(req, res) {
        try{
            const id = req.params.id;
            const Livro = await livro.findById(id);
            res.status(200).json(Livro);
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar livro`})
        }
    }

    static async cadastrarLivro(req, res) {
        try{
            const livroCadastrado = await livro.create(req.body);
            res.status(201).json({message: "livro cadastrado com sucesso", livro: livroCadastrado})
        }catch(e){
            res.status(500).json({message: `${e.message} - erro ao cadastrar livro`})
        }
    }

    static async editarLivroPorId(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        }catch(e){
            res.status(500).json({message: `${e} - erro ao listar livro`})
        }
    }

    static async deletarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro deletado"})
        }catch(e){
            res.status(500).json({message: `${e} - erro ao deletar livro`})
        }
    }
}

export default LivroController;