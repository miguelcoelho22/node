import mongoose, { version } from "mongoose";

const livroSchema = new mongoose.schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo : {type: String, require: true},
    editora : {type: String},
    preco: {type: Number},
    paginas: {type: Number}}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;