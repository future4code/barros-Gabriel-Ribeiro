export class ErrorBase extends Error{
    constructor(public statusCod:number,public message:string){
        super(message)
    }
}

export class Unauthorized extends ErrorBase{
    constructor(){
        super(401, "Usuário sem autorização. Faça o Login e tente novamente.")
    }
}