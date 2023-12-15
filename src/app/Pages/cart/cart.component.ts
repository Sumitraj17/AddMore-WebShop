import { Component } from '@angular/core';
import { Cart,Cartinterface } from '../../Models/cart-interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl:'cart.component.html'
})
export class CartComponent implements OnInit{
  cart:Cart={ items:[{
    product:"https://via.placeholder.com/150",
    name:'Snickers',
    price:150,
    quantity:1,
    id:1
  }]}
  datasource: Array<Cartinterface>=[];
  displaycolumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  ngOnInit(): void {
      this.datasource = this.cart.items;
  }
}
