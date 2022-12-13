import { Response, Request } from "express";
import { connection } from "../data/connections";
import express from "express";

const app = express()

app.use(express.json())

app.post('/purchases',
(req: Request, res: Response): void => {
    let errorCode = 400;
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            errorCode = 422;
            throw new Error("Obrigatóriamente deve informar um Id de Usuário, de Produto e a Quantidade.")
        }

        const id = Date.now()

        
        // const labecommerce_products = connection ("/products")
        // let product_price: Number;
        // if (labecommerce_products.id == product_id) {
        //    product_price = labecommerce_products.price
        //    let final_price = product_price*quantity
        // };

        
        
        connection ("labecommerce_purchases")
            .insert({id, user_id,product_id,quantity})

        res.status(201).send("Produto cadastrado com sucesso.");

    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }
});