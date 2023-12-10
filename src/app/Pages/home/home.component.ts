import { Component, NgModule } from '@angular/core';
import {ProductsHeaderComponent} from './components/products-header/products-header.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppModuleModule } from '../../app.module';
// import { MatDrawerModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppModuleModule,MatSidenavModule,ProductsHeaderComponent],
  templateUrl:'home.component.html',
  styles: ``
})
export class HomeComponent {

}
