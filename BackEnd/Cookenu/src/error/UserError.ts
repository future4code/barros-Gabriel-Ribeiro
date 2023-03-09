import { ErrorBase } from "./ErrorBase";


export class InvalidName extends ErrorBase{
    constructor(){
        super(422, "O nome inserido é inválido.")
    }
}