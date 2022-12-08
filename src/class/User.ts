export class User{
    constructor ( 
        private id:string,
        private name: string, 
        private nickname: string, 
        private email: string,
        private adress: string){

        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email= email;
        this.adress=adress
    }
}