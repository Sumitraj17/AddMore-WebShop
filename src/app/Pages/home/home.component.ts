import { Component, NgModule } from '@angular/core';
import {ProductsHeaderComponent} from './components/products-header/products-header.component'
import { FiltersComponent } from './components/filters/filters.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppModuleModule } from '../../app.module';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { productsclass } from './Products';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../Models/trialProducts';
// import { MatDrawerModule } from '@angular/material/sidenav';
const Rowsobj:{ [id:number]:number} = {1:400, 3:335, 5:300};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppModuleModule,MatSidenavModule,CommonModule,ProductsHeaderComponent,ProductBoxComponent,FiltersComponent, RouterLink,RouterOutlet ,MatGridListModule],
  templateUrl:'home.component.html',
  styles: ``
})
export class HomeComponent {
  cols:number=3;
  rows:number= Rowsobj[this.cols];
  category:string="Shoes" ;
  event !: Product;
  constructor(private cartservice: CartService){}
  item:productsclass[]=[
    {
        category:'Shoe',
        title:'Snickers',
        description:'white and black snickers with a rubber sole',
        price:75
    },
    {
        category:'Shoe',
        title:'Sports',
        description:'Light weight running shoes with cushion technology',
        price:100
    },
    {
        category:'Sports',
        title:'Support',
        description:'Elbow and Knee support',
        price:25
    },
    {
        category:'Sports',
        title:'snickers',
        description:'white and black snickers with a rubber sole',
        price:75
    },
    {
        category:'Shoe',
        title:'Canvas',
        description:'Black cloth shoes',
        price:75
    },
    {
        category:'Sports',
        title:'Gloves',
        description:'Right hand batter White gloves ',
        price:95
    },
    {
        category:'Shoe',
        title:'FlatHead',
        description:'Red color shoe with a white sole',
        price:85
    },
    {
        category:'Sports',
        title:'Duke Ball',
        description:'Red duke ball, weight: 5.5 ounces',
        price:150
    },
    {
        category:'Sports',
        title:'Cricket Bat',
        description:'Kashmir willow size 5 bat',
        price:200
    },
    {
        category:'Shoe',
        title:'leather',
        description:'black leather shoe without lace',
        price:100
    }
]

  oncolumnchangeemit(cols:number):void{
    this.cols = cols;
    this.rows = Rowsobj[this.cols];
    console.log(cols);
  }
  oncategorychange(select:string):void{
    console.log("from home"+select);
    this.category=select;
  }
  onaddtocart(product : Product):void{
    console.log("add to cart")
    console.log(product);
    this.cartservice.addTocart(
        {
            product:product.image,
            name:product.title,
            price:product.price,
            quantity: 1,
            id: product.id
        }
    )
  }
}
