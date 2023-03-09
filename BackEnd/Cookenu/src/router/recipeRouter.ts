import { RecipeController } from "../controller/RecipeController";
import express from 'express';

const recipeController = new RecipeController();

export const recipeRouter=express.Router();

recipeRouter.post("/new-recipe",recipeController.createRecipe)
recipeRouter.get("/all-recipes",recipeController.getAllRecipes)
