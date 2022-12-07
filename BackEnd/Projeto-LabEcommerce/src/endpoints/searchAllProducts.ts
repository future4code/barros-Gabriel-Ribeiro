import { Response } from "express";
import { connection } from "../data/connections";

export default function searchAllProducts
( req: Request, res: Response ): void {
    try {
    
        const products = connection ("labecommerce_products")

        res.status(201).send(products);

    } catch (err: any) {
        res.status(500).send(err);
    }
}