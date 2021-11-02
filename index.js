const express = require("express");
const app = express();
const {MongoClient} = require("mongodb");

app.get("/alunos", (req, res )=> {
    const cliente = new  MongoClient("mongodb://192.168.56.1:27017");
    cliente.connect();
    cliente.db("Fatec").collection("Alunos").find()
    .toArray().then( (alunos) => {
        res.send(alunos)
    }    )

/*
app.get("/aluno", (req, res )=> { //endpoint /aluno
    let usuario = {
                    nome: "Claudio Nunes",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)*/
}) ;

app.get("/professores", (req, res )=> { //endpoint /professores
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})