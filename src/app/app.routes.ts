import { Routes } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component'

export const routes: Routes = [{
    path:'home',
    component:HomeComponent
},
{
    // if local:host is specified without the path, then home page is routed/ landing page is loaded.
    path:'', redirectTo:'home', pathMatch:'full'
}];
