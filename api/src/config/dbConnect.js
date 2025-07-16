import mongoose from "mongoose"

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:2388@livraria-db.ati3muh.mongodb.net/livraria?retryWrites=true&w=majority&appName=livraria-db");

    return mongoose.connection;
}

export default conectaNaDataBase;
