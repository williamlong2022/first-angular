import { Food } from "./Food";

export class CartItem {

 
    food:Food;
    quatnity : number = 1;
    constructor( food:Food) {
        this.food = food;
        this.price;
    }

    get price():number{
        return this.food.price*this.quatnity;
    }
    
}