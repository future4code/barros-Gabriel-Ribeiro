export class User {

    private id:string;
    private name:string;
    private email:string;
    private password: string;

    constructor(id:string, name:string, email:string, password:string) {

        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;

    }

    public getUserName(){
        return this.name
    }

    public getUserEmail(){
        return this.email
    }

    public getUserPass(){
        return this.password
    }

    public getUserId(){
        return this.id
    }
}

export class UserCreateInputDTO {
    
    private name:string;
    private email:string;
    private password:string;
    
    constructor(name:string, email:string, password:string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public getUserName(){
        return this.name
    }

    public getUserEmail(){
        return this.email
    }

    public getUserPass(){
        return this.password
    }
}

export interface LoginInputDTO {
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string
}

export interface FollowUserDTO {
    id: string,
    userId: string,
    followId: string
}

export interface FollowInputDTO {
    userId: string,
    followId: string
}


export interface FollowOutputDTO {
    id: string,
    userId: string,
    followingId: string
}