import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = '~ Isabelle\'s Cafe ~';
  hideBadge: boolean = true;
  num: number = 0;
  cart: Menu[] = [];


}
