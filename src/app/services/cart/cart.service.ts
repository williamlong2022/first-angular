import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  constructor() { }

  addToCart(food:Food) {
  let cartItem = this.cart.items.find(item=>{
      item.food.id == food.id;
    });

    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quatnity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  changeQuantity(id: number, quantity: number) {
    let cartItem = this.cart.items.find(item=>{
      item.food.id == id;
    });
    if (!cartItem)return;
    cartItem.quatnity = quantity;

  }

  removeFromCart(foodid : number): void{
    this.cart.items = this.cart.items.filter(item=>{
      item.food.id != foodid;
    });
  }

  getCart():Cart{

    return this.cart; 
  }


}
