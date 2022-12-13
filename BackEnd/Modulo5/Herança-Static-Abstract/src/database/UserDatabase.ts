import { User } from './UserClass';
import { Knex } from 'knex';

export class UserDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertUser=async(newUser:User)=>{
        await this.connection("Labe_Users").insert(newUser);
    }

    public getUsers=async()=>{
        const result = await this.connection("Labe_Users").select();
        return result;
    }

    public searchUsers=async(User_id:string)=>{
        const response = await this.connection("Labe_Users").select(User_id);
    }
}