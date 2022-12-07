import { Response, Request } from "express";
import { connection } from "../data/connections";

export default async function createUser
(req: Request, res: Response): Promise<void> {
    let errorCode = 400;
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422;
            throw new Error("Obrigatóriamente deve informar: Nome, Email e Senha.")
        }

        const id = Date.now()
        
        connection ("labecommerce_users")
            .insert({id, name,email,password})

        res.status(201).send("Conta cadastrada com sucesso!");

    } catch (err: any) {
        res.status(errorCode).send(err.message);
    }
}