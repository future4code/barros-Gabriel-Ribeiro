import { UserDatabase } from "../data/UserDatabase";
import { ErrorBase, Unauthorized } from "../error/ErrorBase";
import { InvalidName } from "../error/UserError";
import { FollowInputDTO, LoginInputDTO, User, UserCreateInputDTO, FollowUserDTO } from "../models/User";
import { hashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()

export class UserBusiness {

    public HashManager = new hashManager();

    public userDatabase = new UserDatabase();

    public createUser = async (input: UserCreateInputDTO) => {

        try {

            if (!input.getUserName()) {
                throw new InvalidName();
            }

            const id = IdGenerator.generateId();

            const password:string = input.getUserPass();

            const hashPassword = await this.HashManager.generateHash(password);

            const user:User = new User(id,input.getUserName(),input.getUserEmail(),hashPassword)

            await this.userDatabase.createUser(user);
            
        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }

    }

    public getAllUsers = async () => {
        
        try{
            const users = await this.userDatabase.getAllUsers();
            return (users);
        } catch (err:any) {
            throw new ErrorBase(err.status,err.message);
        }

    }

    public login = async (input: LoginInputDTO) => {

        try {

            const {email,password} = input;

            const userDatabase = new UserDatabase();
            const user = await userDatabase.findUserByEmail(email)

            const token = authenticator.generateToken({id: user.id})

            return token

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message);

        }

    }

    public getUserByToken = async (token:string) => {
        try {
            
            const Token = token;

            const user = authenticator.getTokenData(Token);
            return user;

        } catch (err:any) {

            throw new Unauthorized()

        }

    } 

    public follow = async (input:FollowInputDTO) => {
        try{

            const { userId, followId } = input

            const id = IdGenerator.generateId()

            const newFollower: FollowUserDTO = {
                id, userId, followId
            }

            await this.userDatabase.followUser(newFollower)

        } catch (err:any) {

            throw new ErrorBase(err.status,err.message)

        }
    }

}
