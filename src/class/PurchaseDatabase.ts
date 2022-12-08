import Knex from "knex";
import { Purchase } from './Purchase';

export class PurchaseDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertPurchase=async(newPurchase:Purchase)=>{
       await this.connection("Purchase").insert(newPurchase);
    }
    public getPurchase=async()=>{
       const result= await this.connection("Purchase").select();
       return result;
    }
}