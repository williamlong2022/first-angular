import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[] = [];

    constructor(){

    }

    get totalPrice():number{
        let totalprice = 0;
        
        this.items.forEach(item=>totalprice+=item.price);

        return totalprice;
    }
}