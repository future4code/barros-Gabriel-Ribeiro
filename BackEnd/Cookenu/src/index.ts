import { userRouter } from './router/userRouter';
import { app } from './app';
import { recipeRouter } from './router/recipeRouter';

app.use("/user",userRouter);
app.use("/recipe",recipeRouter);