import { FollowUserDTO, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";
import { Response } from "express";
import { ErrorBase } from "../error/ErrorBase";
import { UserBusiness } from "../business/UserBusiness";


export class UserDatabase extends BaseDatabase {
    
    private userTable="Cookenu_Users";

    private followTable="Cookenu_Users_Followers";

    async createUser(user: User) {
        try {
            await UserDatabase.connection(this.userTable).insert(user);
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

    async getAllUsers() {
        try {
            const users:User[] = await UserDatabase.connection.select('*').from(this.userTable);
            return users;
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

    async getUserById (id:string) {
        try{
            const user = await UserDatabase.connection(this.userTable).select().where({id:id})
            return user[0]
        } catch (err:any) {
            throw new ErrorBase(err.status, err.message);
        }
    }

    async findUserByEmail (email:string) {
        try {
            const result = await UserDatabase.connection(this.userTable).select().where({email})

            return result[0]
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

    async getFollowList (userId:string) {
        try {
            const followList = await UserDatabase.connection(this.followTable).select().where({user_id: userId})

            return followList
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }

    }

    async followUser (input: FollowUserDTO) {
        try {
            await UserDatabase.connection(this.followTable).insert({id:input.id,user_id:input.userId,followingId:input.followId})
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

   async getFollowingById (id:string) {
        try {
            const feedList = await UserDatabase.connection(this.followTable).select().where({user_id:id})
            return feedList
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }
    }

}
