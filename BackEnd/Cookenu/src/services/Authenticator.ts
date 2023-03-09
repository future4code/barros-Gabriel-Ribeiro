import { AuthenticationData } from "../models/User";
import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/ErrorBase";


export class Authenticator {
    
    public generateToken = ({id}:AuthenticationData): string => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )
        return token
    }

    getTokenData = (token:string): AuthenticationData => {
        try{

            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload

        } catch (err:any) {

            console.log(err.message)
            throw new Unauthorized()

        }
    }
}
