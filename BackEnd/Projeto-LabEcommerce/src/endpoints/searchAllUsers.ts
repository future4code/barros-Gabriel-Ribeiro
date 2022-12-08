import { Response } from "express";
import { connection } from "../data/connections";

export default async function searchAllUsers
( req: Request, res: Response ): Promise<void> {
    try {
    
        const users = await connection ("labecommerce_users")

        res.status(201).send(users);

    } catch (err: any) {
        res.status(500).send(err);
    }
}