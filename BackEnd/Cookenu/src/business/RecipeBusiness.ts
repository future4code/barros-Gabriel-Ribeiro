import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { ErrorBase } from "../error/ErrorBase";
import { Recipe, RecipeCreateInputDTO, RecipeGetAllOutputDTO } from "../models/Recipe";
import { IdGenerator } from "../services/idGenerator";

export class RecipeBusiness {
    recipeDatabase = new RecipeDatabase();


    getAllRecipes = async () => {

        try {
            const recipes:Recipe[] = await this.recipeDatabase.getAllRecipes();

            const recipesOutput:RecipeGetAllOutputDTO[]=recipes.map((p)=>{
                return new RecipeGetAllOutputDTO(p.name,p.description,p.preparation,p.creationDate,p.author_id)
            })
            return (recipesOutput);
        
        } catch (err: any) {
            
           throw new ErrorBase(err.status,err.message);
        
        }
    }

    createRecipe = async (input: RecipeCreateInputDTO) => {

        try {

            const id = IdGenerator.generateId();

            const recipe:Recipe = new Recipe(
            id,input.getRecipeName(),input.getRecipeDescription(),
            input.getRecipePreparation(),input.getRecipeCreationDate(),input.getRecipeAuthorId())

            await this.recipeDatabase.createRecipe(recipe);

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }

    }

    getFeed = async(token: string, userId: string) => {
        const userDatabase = new UserDatabase();

        try {

            const following = await userDatabase.getFollowingById(userId)

            const allRecipes = []

            for (let i = 0; i < following.length; i++) {
                const recipesByUser = await this.recipeDatabase.getRecipeById(following[i].following_id)
                if (recipesByUser.length > 0) {
                    allRecipes.push(...recipesByUser)
                }
            }

            if (allRecipes.length === 0) {
                throw new ErrorBase(400, "No recipes found.")
            }

            return allRecipes
            
        } catch (err:any) {
            throw new ErrorBase(err.statusCode, err.message); 
        }
    };

}

