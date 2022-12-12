import { Request, Response } from "express"
import { connection } from "../data/connections"
import { TABLE_USERS } from "../data/tableNames"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection(TABLE_USERS).select()
        res.status(200).send({ users: result })
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}