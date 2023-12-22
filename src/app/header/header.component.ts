import { Component,Input } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cart,Cartinterface } from '../Models/cart-interface';
import { CartComponent } from '../Pages/cart/cart.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CartComponent,
    CommonModule,
    RouterOutlet,
    CurrencyPipe,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatListModule
  ],
  templateUrl:"./header.component.html" ,
  styles: ``
})
export class HeaderComponent {
  private _cart: Cart = {items:[]};
  itemsquantity = 0;

  @Input()
  get cart():Cart{
    return this._cart;
  }
  set cart(cart:Cart){
    this._cart = cart;

    this.itemsquantity = cart.items
    .map((item)=> item.quantity)
    .reduce((prev,curr)=> prev+curr,0);
  }
  constructor(private cartservice: CartService){}
  getTotal(item:Array<Cartinterface>):number{
    return this.cartservice.getTotal(item);
  }
  removeitems():void{
    this.cartservice.removeitems();
    this.itemsquantity=0;
  }
}
