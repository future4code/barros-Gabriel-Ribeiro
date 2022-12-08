import { Product } from './Product';
import Knex from "knex";

export class ProductDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertProduct=async(newProduct:Product)=>{
       await this.connection("Products").insert(newProduct);
    }
    public getProducts=async()=>{
       const result= await this.connection("Products").select();
       return result;
    }
}