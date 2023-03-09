import { UserBusiness } from "../business/UserBusiness";
import { UserCreateInputDTO, User, LoginInputDTO } from "../models/User";
import { Request, Response } from "express";
import { ErrorBase } from "../error/ErrorBase";
import { Authenticator } from "../services/Authenticator";



export class UserController{

    private userBusiness= new UserBusiness();
    private authenticator = new Authenticator()

    createUser =async (req:Request, res:Response) => {

        try {
            const name=req.body.name;
            const email=req.body.email;
            const password=req.body.password;

            const input = new UserCreateInputDTO(name,email,password)

            await this.userBusiness.createUser(input)

            res.status(200).send(`O usuario foi cadastrado com os seguintes dados; Nome:${name} Email:${email} Senha:${password}`)

        } catch (err:any){

            throw new ErrorBase(err.status,err.message);

        }
        
    };

    getAllUsers = async (req:Request, res:Response) => {

        try{

            const users=await this.userBusiness.getAllUsers();

            res.status(200).send(users)

        } catch(err:any){

            throw new ErrorBase(err.status,err.message);

        }
    }

    login = async (req:Request, res:Response) => {

        try {
            const {email,password} = req.body;

            const input: LoginInputDTO = {
                email,
                password,
            };
            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input);

            res.status(200).send({token});

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }

    }

    getUserByToken = async (req:Request, res:Response) => {

        try {
            const {token} = req.body;

            const userBusiness = new UserBusiness()
            const user = await userBusiness.getUserByToken(token);
        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }

    }

    follow = async (req:Request, res:Response) => {

        try{

            const token = req.headers.authorization as string
            const authenticationData = this.authenticator.getTokenData(token)
            const userId = authenticationData.id 
            const followId = req.params.id

            const input = {userId, followId}
            await this.userBusiness.follow(input)

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }
        
    }

}

