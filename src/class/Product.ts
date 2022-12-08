export class Product{
    constructor ( 
        private id:string,
        private name: string, 
        private price: string,
        private image_url: string){

        this.id = id;
        this.name = name;
        this.price = price;
        this.image_url = image_url
    }
}