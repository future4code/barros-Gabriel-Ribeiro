import { Request, Response } from "express"

import { connection } from "../data/connection"

// 1) A)

let statusCode = 400

export async function selectUsers(
    req: Request,
    res: Response
):Promise<any> {
    let nameInput = req.query.name as string
    const result = await connection.raw(`
       SELECT id, name, email, type
       WHERE name = ${nameInput}
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectUsers(req, res)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 // B)

 export async function selectUsersByType(
    req: Request,
    res: Response
):Promise<any> {
    let typeInput = req.path as string
    const result = await connection.raw(`
       SELECT id, name, email, type
       WHERE type = ${typeInput}
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 // 2)

 export const getOrderedUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       
        let name = req.query.email as string
        let email = req.query.email as string
        let sort = req.query.sort as string
        let order = req.query.order as string

        let search

        if(sort && sort.toLowerCase() == "name"){
            search = name
        }

        if(sort && sort.toLowerCase() == "email"){
            search = email
        }

        if(sort && sort.toLowerCase() !== "name" && sort && sort.toLowerCase() !== "email"){
            search = email
        }

        if(order && order.toUpperCase() !== "ASC"){
            order = "ASC"
        }

       const result = await connection("aula49_recipes")
       .where("name", "like", `%${search}%`)
       .orderBy(sort, order)
 
       if(!result.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 // 3)

 export const getFiveUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let size = 5
        let page = Number(req.query.page)

       const FiveUsers = await connection("aula49_recipes")
       .limit(size)
       .offset(page)
 
       res.status(200).send(FiveUsers)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 // 4)

 export const UltimateGetUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       
        let name = req.query.email as string
        let email = req.query.email as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)
        let size = Number(req.query.page)

        let search

        if(!page){
            page=1
        }

        if(!size){
            size=10
        }

        if(sort && sort.toLowerCase() == "name"){
            search = name
        }

        if(sort && sort.toLowerCase() == "email"){
            search = email
        }

        if(sort && sort.toLowerCase() !== "name" && sort && sort.toLowerCase() !== "email"){
            search = name
        }

        if(order && order.toUpperCase() !== "DESC" ||  order && order.toUpperCase() !== "ASC"){
            order = "DESC"
        }

        if(!name && !email){
            search = "%"
        }

       const result = await connection("aula49_recipes")
       .where("name", "like", `%${search}%`)
       .orderBy(sort, order)
       .limit(size)
       .offset(page)
 
       if(!result.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }