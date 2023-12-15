import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import {HeaderComponent} from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,RouterLink],
  templateUrl: './app.components.html',
  styles: [],
})
export class AppComponent {
  title = 'store';
}
