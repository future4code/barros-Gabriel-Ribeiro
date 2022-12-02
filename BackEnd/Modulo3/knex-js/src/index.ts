import  express, { Request, Response} from 'express';

import cors from 'cors';

import knex from "knex";

import dotenv from "dotenv";

import connection from './dataBase/connection';
import { count } from 'console';

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// Exercicio 1

// A) Ao utilizar o codigo que tem como input algo do tipo raw vai retornar exatamente a resposta que foi recebida.

// B) 
/*
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result[0][0]
  }
  */

// C) 
/*
const getGenderActorNumber = async (gender: string): Promise<any> => {
    if (gender=="male" || gender=="female"){
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0].count} else {
        const erro=new Error("Insira um genero valido");
        erro.name="invalidGender";
      }
  }
*/

// Exercicio 2

// A) 
/*
const newSalary = async (
    id: string,
    salary: number
) : Promise<void> => {
    await connection ("Actors")
        .update(
            {
                salary:salary
            } 
        ).where (
            "id":id
        )
}
*/

// B) 
/*
const deleteActor = async (
    id: string
) : Promise<void> => {
    await connection ("Actors")
        .delete(
        ).where (
            "id":id
        )
}
*/

// C) 
/*
const avgGenderSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg(salary)
    .where({ gender });

return result[0].average
}
*/

// Exercicio 3

// A) 
// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);
  
//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });

// B) 
// app.get("/actorByGender", async (req: Request, res: Response) => {
//     try {
//         const genderCount = await countActors(req.query.gender as string);
//         res.status(200).send({quantity:count,});
//       } catch (err) {
//         res.status(400).send({
//            message: err.message,
//         });
//       }
//     });

// Exercicio 4

// A) 

// app.patch("/actor/salary/update", async (req: Request, res: Response) => {
//     try {
//         await newSalary(
//             req.body.id,
//             req.body.salary
//         );

//         res.status(200).send("Salario atualizado.");
//     } catch (err) {
//         res.status(400).send({
//             message:err.message,
//         })
//     }
// })

// B) 

// app.delete("/actor/delete", async (req: Request, res: Response) => {
//     try {
//         await deleteActor(
//             req.params.id
//         );

//         res.status(200).send("Ator deletado.");
//     } catch (err) {
//         res.status(400).send({
//             message:err.message,
//         })
//     }
// })