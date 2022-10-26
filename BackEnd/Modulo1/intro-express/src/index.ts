import express ,{ Request, Response } from "express"

import cors from 'cors'

import { users } from './data'

const app = express()

app.use(express.json())

app.use(cors())

// 1)

app.get('/', (req:Request,res:Response)=>{
    
    res.send("http://localhost:3003")

})

app.get("/users", (req:Request,res:Response)=>{

    const todosUsers = users.map((user)=>{
        return user.listaUser
    })

    res.send(todosUsers)

})

app.get("/posts", (req:Request,res:Response)=>{

    const todosPosts = listaUser.map(()=>{
        return users.listaUser.post.title
    })

    res.send(todosPosts)

})

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003");
});