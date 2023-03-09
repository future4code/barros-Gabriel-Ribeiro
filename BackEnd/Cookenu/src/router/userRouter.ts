import { UserController } from "../controller/UserController";
import express from 'express';


const userController = new UserController();

export const userRouter=express.Router();

userRouter.post("/new-user",userController.createUser)
userRouter.get("/all-users",userController.getAllUsers)
userRouter.post("/login", userController.login)
userRouter.get("/user-by-token",userController.getUserByToken)
userRouter.post("/user/:id/follow", userController.follow)


