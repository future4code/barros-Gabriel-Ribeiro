export class Recipe {
    constructor(
        public id:string,
        public name: string,
        public description: string,
        public preparation: string,
        public creationDate: Date,
        public author_id:string 
    ){}
}

export class RecipeGetAllOutputDTO {
    constructor(
        public name: string,
        public description: string,
        public preparation: string,
        public creationDate: Date,
        public author_id:string 
    ){}
}

export class RecipeCreateInputDTO {
    
    private name:string;
    private description:string;
    private preparation:string;
    private creationDate: Date;
    public author_id:string 
    
    constructor(name:string, description:string, preparation:string, creationDate:Date, author_id:string) {

        this.name = name;
        this.description = description;
        this.preparation = preparation;
        this.creationDate = creationDate;
        this.author_id = author_id;
        
    }

    public getRecipeName(){
        return this.name
    }

    public getRecipeDescription(){
        return this.description
    }

    public getRecipePreparation(){
        return this.preparation
    }

    public getRecipeCreationDate(){
        return this.creationDate
    }

    public getRecipeAuthorId(){
        return this.author_id
    }
}