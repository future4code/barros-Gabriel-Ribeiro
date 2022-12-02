import { Request,Response } from "express";
import  { connection } from "../data/connections"
import getAddressInfo from "../services/getAdressInfo";

type adress = {
    cep:string
    logradouro:string
    numero: string
    complemento: string
    bairro: string
    cidade:string
    estado:string
}

type user = {
    id:string
    name:string
    nickname: string
    email: string
    endereco:any
}

export default async function createUser(
    req:Request,
    res:Response
): Promise<void> {
    try {
        const {name,nickname,email,CEP} = req.body;

        if(!name || !nickname || !email || !CEP) {
            res.statusCode = 422;
            throw "Alguma entrada invalida";
        }

        const id: string = Date.now().toString();
        
        const endereco = await getAddressInfo(CEP);

        const novoUser: user = { id, name, nickname, email, endereco};

        //await connection("aula-servicos").insert(novoUser);
        console.log(novoUser)

        res.status(201).send("Usuario criado.");
    } catch (error:any) {
        if(typeof error === "string") {
            res.send(error);
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}