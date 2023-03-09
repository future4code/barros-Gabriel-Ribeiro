import * as bcrypt from "bcryptjs"

export class hashManager {

    generateHash = async (plainText: string): Promise<string> => {
        
        const cost:number = Number(process.env.BCRYPT_COST)
        const salt:string = await bcrypt.genSalt(cost)
        const hash:string = await bcrypt.hash(plainText, salt)

        return hash
    }

}