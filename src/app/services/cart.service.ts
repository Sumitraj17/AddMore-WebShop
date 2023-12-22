import { Injectable } from '@angular/core';
import { Cart,Cartinterface } from '../Models/cart-interface';
import { BehaviorSubject} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  tocart= new BehaviorSubject<Cart>({items:[]})
  constructor(private _snackbar: MatSnackBar ) {}

  addTocart(item: Cartinterface):void{
    const itemarr = [...this.tocart.value.items]  // (...)--> is a spread operator that creates a shallow copy of the specified structure.
    const iteminarr = itemarr.find((_item)=> _item.id === item.id);

    if(iteminarr)
      iteminarr.quantity +=1;
    else
      itemarr.push(item);

    this.tocart.next({items : itemarr});
    this._snackbar.open('1 items added to the cart','ok',{duration:3000});
    console.log(this.tocart.value);
  }
  getTotal(item:Array<Cartinterface>):number{
    return item.
      map((item)=> item.price * item.quantity)
      .reduce((prev,current)=>prev+current,0);
  }
  removeitems():void{
    this.tocart.next({items:[]});
    this._snackbar.open('The cart is clear.','Ok',{duration: 3000});
  }
  index :number=0
  itemremove(item:Cartinterface):void{
    this.index = this.tocart.value.items.indexOf(item);
    this.tocart.value.items.splice(this.index,1);
    this._snackbar.open('1 item removed','Ok',{duration:3000})
  }
}
