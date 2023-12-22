import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { Cart } from './Models/cart-interface';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,RouterLink],
  templateUrl: './app.components.html',
  styles: [],
})
export class AppComponent implements OnInit{
  cart:Cart={items:[]};

  constructor(private _cartservice: CartService){}

  ngOnInit(): void {
      this._cartservice.tocart.subscribe((_cart)=> {this.cart=_cart});
  }
}
