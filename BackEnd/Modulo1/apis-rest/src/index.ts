import express, {Request, Response} from "express"

import { users } from "./data"

import {User,USER_TYPE} from './types'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {

    console.log("O servidor roda na porta 3003");

});

//-------------------------------------------------------------------------

app.get("/users",(req:Request, res:Response)=>{

    try {

        res.status(200).send(users)

    } catch {

    }

})

// A) O método Get, pois eu puxo um dado e não preciso enviar nenhum input do utilizador.

// B) Indicar?

//-------------------------------------------------------------------------

app.get("/search-age", (req:Request, res:Response)=>{

    let errorCode = 400

    const userAge = req.query.age

    if(!userAge){
        errorCode = 401
        throw new Error ('Parametro invalido')
    }

    const userFound = users.find((user) => {
        return user.age === Number(userAge)
    })

    if(!userFound){
        errorCode = 404 
        throw new Error("Usuário não encontrado"); 
    }

    res.status(200).send(userFound)

})

// A) Os inputs da API recebidos vem do query, portanto, ou o user entra sabendo que tipo especifico esta
// produrando, ou a aplicação recebe primeiro o tipo, armazena em var e depois o valor a ser pesquisado.

// B) Se existir uma verificação no momento que ele entra o tipo escolhido e/ou se ele souber qual tipo usar como referencia.

//----------------------------------------------------------------------------------

app.get('/search-name', (req:Request,res:Response) => {

    let codeError = 400

    try{

        const queryName = req.query.name as string

        if (!queryName){
            codeError = 401
            throw new Error ('Nome invalido ou nao existente.')
        }

        const searchUser = users.find((user)=>{
            return user.name.toLowerCase() === queryName.toLowerCase()
        })

        if(!searchUser){
            codeError = 404
            throw new Error("Usuario nao encontrado");
        }

        res.status(200).send(searchUser)
        
    }   catch (error:any) {
        res.status(codeError).send(error.message)
    }

})

// A) Query, afinal, como um endpoint que não altera os dados, ele precisa receber um input sem Body para buscar o dado exigido.

// B) Ok.

//------------------------------------------------------------------------------------------

app.post("/new-user", (req:Request,res:Response)=>{
    let error = 400

    try{

        const {newName, newEmail, newType, newAge} = req.body
        
        if(!newName || !newEmail || !newType || !newAge){
            error = 422
            throw new Error("Algun(s) parametro(s) esta/ao ausente(s) ou invalido(s)")
        }

        if(newType.toUpperCase()!== "ADMIN" && newType.toUpperCase() !== "NORMAL"){
            error=402
            throw new Error ("Insira um tipo de user valido (Admin ou Normal)")
        }

        const userNew : User ={

            id:Math.random(),
            name:newName,
            email:newEmail,
            type: newType.toUpperCase(),
            age: newAge
        }

        users.push(userNew)

        res.status(201).send(users)

    } catch (error:any) {
        res.status(error).send(error.message)
    }
})

// A) Parou de funcionar.

// B) Acho que não, já que o ideal é o que funciona.