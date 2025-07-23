import livro from "../models/livro.js";
import { autor } from "../models/autor.js"

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
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...livro, autor: {...autorEncontrado._doc }}
            const livroCadastrado = await livro.create(livroCompleto);
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

    static async buscarPorEditora(req, res) {
        try{
            const editoraBuscada = req.query.editora
            const possuiEditora = await livro.find( {editora: editoraBuscada } )
            res.status(200).json(possuiEditora)
        }catch(e){
            res.status(500).json({message: `${e} - erro ao buscar livro`})
        }
    }
}

    
export default LivroController;