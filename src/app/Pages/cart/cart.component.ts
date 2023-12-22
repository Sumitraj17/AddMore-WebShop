import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart,Cartinterface } from '../../Models/cart-interface';
import { OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductBoxComponent } from '../home/components/product-box/product-box.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule,MatTableModule,CommonModule ,RouterLink,CurrencyPipe,MatButtonModule,MatIconModule,ProductBoxComponent],
  templateUrl:'cart.component.html'
})
export class CartComponent implements OnInit{
  cart:Cart={ items:[]}
  datasource: Array<Cartinterface>=[];
  displaycolumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
  constructor(private _cartservice: CartService){}
  ngOnInit(): void {
      this._cartservice.tocart.subscribe((_cart)=> {this.cart=_cart
        this.datasource = this.cart.items;
      });
      
  }
  getTotal(item:Array<Cartinterface>):number{
    return item.
      map((item)=> item.price * item.quantity)
      .reduce((prev,current)=>prev+current,0);
  }
  clearcart():void{
    this._cartservice.removeitems();
  }
  removeitem(row:Cartinterface):void{
    this._cartservice.itemremove(row);
  }
}
