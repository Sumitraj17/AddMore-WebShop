import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule,MatListModule,CommonModule],
  templateUrl:"filters.component.html" 
})
export class FiltersComponent {
  @Output() categoryselect = new EventEmitter<string>();
  categories:string[]=['Shoes','Sports'];
  onselectcategory(select :string):void{
    console.log("from filters"+select);
    this.categoryselect.emit(select);

  }
}
