import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Cânula para aparelho, material em aço inox', price: 245.00, amount: 0 , img:"/assets/Canula.jpg" },
    { id: 1, name: 'Transferidor de gordura 20x20ml', price: 400.00, amount: 0,img:"/assets/Transferidos.jpg" },
    { id: 2, name: 'Decantador de gordura para seringa de 60ml', price: 175.00, amount: 0, img:"/assets/Decantador.jpg" },
    { id: 3, name: 'Kit Lipo de papada aparelho', price: 700.00, amount: 0, img:"/assets/KitLipo.jpg" },
    { id: 4, name: 'Kit Lipo de papada seringa', price: 600.00, amount: 0, img:"/assets/KitLipo2.jpg" },
    { id: 5, name: 'Aplicador de cartilagem', price: 590.00, amount: 0, img:"/assets/Cartilagem.jpg" }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}