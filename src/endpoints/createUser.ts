import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";

import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, zipcode } = req.body;

    if (!name || !nickname || !email || !zipcode) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'zipcode' são obrigatórios";
    }

    const id: string = Date.now().toString();
    const address = await getAddressInfo(zipcode);

    const newUser: user = { id, name, nickname, email, address };

    // await connection("aula_webservices_users").insert(newUser);

    const send = await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: [email],
      subject: "Conta criada!",
      text: "Parabéns! Sua conta foi criada com sucesso!",
    });

    console.log(send);

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
