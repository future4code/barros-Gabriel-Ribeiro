import { RecipeBusiness } from "../business/RecipeBusiness";
import { ErrorBase } from "../error/ErrorBase";
import { RecipeCreateInputDTO, RecipeGetAllOutputDTO } from "../models/Recipe";
import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()

export class RecipeController {
    private recipeBusiness=new RecipeBusiness();

    getAllRecipes = async (req:Request, res:Response) => {
        try {

            const recipes: RecipeGetAllOutputDTO[]= await this.recipeBusiness.getAllRecipes();

            res.status(200).send(recipes)

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }
    }

    createRecipe = async (req:Request, res:Response) => {
        try {
            const name = req.body.name;
            const description = req.body.description;
            const preparation = req.body.preparation;
            const creationDate = req.body.creationDate;

            const userToken = req.headers.authorization as string

            const author = authenticator.getTokenData(userToken)

            const input = new RecipeCreateInputDTO(name,description,preparation,creationDate,author.id)

            await this.recipeBusiness.createRecipe(input)

            res.status(200).send(`A Receita de nome ${name} foi cadastrada com sucesso.`)

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }
    }
}