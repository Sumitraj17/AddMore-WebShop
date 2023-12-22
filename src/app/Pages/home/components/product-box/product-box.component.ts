import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { productsclass } from '../../Products';
import { Product } from '../../../../Models/trialProducts';
@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule,CurrencyPipe,MatIconModule,CommonModule],
  templateUrl:'product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode=false;
  @Input() moreitems!:productsclass;
  @Output() addtocart: EventEmitter<Product> = new EventEmitter();
 
  product:Product ={
    id:1,
    title:'Snickers',
    price:150,
    category:'Shoe',
    description:'White Shoe',
    image:"C:\Users\LENOVO\OneDrive\Desktop\DRDO\ECommerce\AddMore-WebShop\src\app\Models\images.jpg"
  }
  // @Output() addtocart:EventEmitter<Product> = new EventEmitter();
  onaddCart():void{
    console.log("cart clicked")
    this.addtocart.emit(this.product);
    
  }
}
