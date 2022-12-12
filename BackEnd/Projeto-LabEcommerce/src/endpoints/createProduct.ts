import { Response, Request } from "express";
import { connection } from "../data/connections";


export default async function createProduct
(req: Request, res: Response): Promise<void> {
    let errorCode = 400;
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            errorCode = 422;
            throw new Error("Obrigatóriamente deve informar: Nome, Preço e uma Imagem.")
        }

        const id = Date.now()
        
        connection ("labecommerce_products")
            .insert({id:id, name:name,price:price,image_url:image_url})

        res.status(201).send("Produto cadastrado com sucesso.");

    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }
};