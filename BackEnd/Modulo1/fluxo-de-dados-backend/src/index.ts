import express, { Request, Response} from "express"

import { productsList } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// -----------------------------------------------

app.get("/teste",(req, res)=>{
   
    res.status(201).send('Servidor rodando na porta 3003!')
   })

// -----------------------------------------------

app.post("/new-product",(req:Request, res: Response)=>{
    const productName:string = (req.body.name)
    const productPrice = Number(req.body.price)
    const supermercado = req.headers.authorization


    for(let i = 0; i < productsList.length; i ++){
        if(productsList[i].id === supermercado ){
            productsList[i].produtos.push({
                id: Date.now().toString(),
                name :productName ,
                price: productPrice,
            })
        }

    }

    res.status(200).send(productsList)
})

// ------------------------------------------------

