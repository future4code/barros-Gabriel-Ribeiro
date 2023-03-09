import { ErrorBase } from "../error/ErrorBase";
import { Recipe } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDatabase extends BaseDatabase {
    private userTable= "Cookenu_Recipes";
    private followTable= "Cookenu_Users_Followers"

    async getAllRecipes() {
        try {
            const recipes:Recipe[] = await RecipeDatabase.connection.select('*').from(this.userTable);
            return recipes;
        } catch (err:any){
            throw new ErrorBase(err.status,err.message);
        }
    }

    async createRecipe(recipe: Recipe) {
        try {
            await RecipeDatabase.connection(this.userTable).insert(recipe);
        }catch(err:any){
            throw new ErrorBase(err.status,err.message);
        }
    }

    async getRecipeById(id:string) {
        try{
            const feed = await RecipeDatabase.connection(this.followTable).select().where({id})
            return feed[0]
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

}

