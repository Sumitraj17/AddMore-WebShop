import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { productsclass } from '../../Products';
@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule,CurrencyPipe,MatIconModule,CommonModule],
  templateUrl:'product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode=false;
  @Input() moreitems!:productsclass;
}
