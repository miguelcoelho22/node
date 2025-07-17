import livro from "../models/livro.js";

class LivroController{

    static async listasLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async cadastrarLivro(req, res) {
        try{
            const livroCadastrado = await livro.create(req.body);
            res.status(201).json({message: "livro cadastrado com sucesso", livro: livroCadastrado})
        }catch(e){
            res.status(500).json({message: `${e.message} - erro ao cadastrar livro`})
        }
    }
}

export default LivroController;