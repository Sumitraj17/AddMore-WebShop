import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule,MatMenuModule,MatIconModule],
  templateUrl:'products-header.component.html',
  styles: ``
})
export class ProductsHeaderComponent {
  sort: string='sort';
  itemsShowCount:Number=12;
  @Output() columnemitter = new EventEmitter<number>();
  onselectSort(s:string):void {
    this.sort = s;
    console.log(this.sort)
  }
  onitemsSelect(num:Number):void{
    this.itemsShowCount = num;
    console.log(this.itemsShowCount);
  }
  oncolumnchange(column :number):void{
    this.columnemitter.emit(column);
  }
}
