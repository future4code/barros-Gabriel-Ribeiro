// import { Response, Request } from "express";
// import { connection } from "../data/connections";

// export default async function searchAllProducts ( req: Request, res: Response ): Promise<void> {
//     try {
//         const products = await connection ("labecommerce_products")

//         res.status(201).send(products);

//     } catch (err: any) {
//         res.status(500).send(err);
//     }
// }

import { Request, Response } from "express"
import { connection } from "../data/connections"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection("labecommerce_products").select()
        res.status(200).send({ products: result })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}