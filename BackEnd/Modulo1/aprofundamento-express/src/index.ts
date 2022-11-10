import express, { Request, Response } from "express"

import cors from 'cors'

import { data } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/ping", (req,res) => {
    res.send("Pong! 🏓")
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

/*app.get("/status", (req:Request,res:Response) => {

    const inputStatus = req.query.inputStatus

    let tarefasLista

    if(data.status===inputStatus){
        const tarefasFiltradas = inputStatus
    }

})*/

app.put("/adicionarTarefa", (req:Request,res:Response) => {

    const idUser1 = req.headers.authorization
    const tituloTarefa1 = req.body.tarefas

    if(!idUser1 || !tituloTarefa1){
        res.status(400).send("Usuario e/ou titulo invalido(s).")
    }
    
        data.push({
            idUsuario:`${idUser1}`,
            id: Date.now(),
            titulo:`${tituloTarefa1}`,
            status:"false"
        })
    
    res.status(200).send(data)

})

app.post("/editarStatus:id"), (req:Request,res:Response) => {

    const idUser2 = req.headers.authorization
    const tituloTarefa2 = req.body.tarefas

    if(!idUser2 || !tituloTarefa2){
        res.status(400).send("Usuario e/ou titulo invalido(s).")
    }

    for(let i = 0; i < data.length; i++){
        if(data[i].titulo === tituloTarefa2){
            !data[i].titulo
        }
    }

    res.status(200).send(`Tarefa alterada: ${data}`)

}

app.delete("deletarTarefa:id"), (req:Request,res:Response) => {

    const idUser3 = req.headers.authorization
    const tituloTarefa3 = req.body.tarefas

    if(!idUser3 || !tituloTarefa3){
        res.status(400).send("Usuario e/ou titulo invalido(s).")
    }

    let tarefasAtuais

    for(let i = 0; i < data.length; i++){
        if(data[i].titulo === tituloTarefa3){
            tarefasAtuais = data.filter((tarefa)=>{
                return tarefa.titulo !== tituloTarefa3
            })
        }
    }

    res.status(200).send(tarefasAtuais)

}

app.get("afazeres:idUsuario") , (req:Request,res:Response) => {

    const idUser4 = req.headers.authorization
    
    if(!idUser4){
        res.status(400).send("Usuario invalido.")
    }

    let listaTarefas = []

    for(let i = 0; i < data.length; i++){
        if(data[i].idUsuario === idUser4){
            listaTarefas.push(data[i])
        }
    }

    res.status(200).send(listaTarefas)

}