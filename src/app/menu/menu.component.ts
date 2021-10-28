import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [];
  hideBadge = true;
  num = 0;
  cart: Menu[] = [];

  constructor(
    private menuService: MenuService,
    private appComponent: AppComponent,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenuItems()
    .subscribe(menu => this.menu = menu);
  }

  addToCart(item: Menu) {
    if (this.appComponent.num <= 0) {
      this.appComponent.hideBadge = !this.appComponent.hideBadge;
    }
    this.appComponent.num += 1;
    this.appComponent.cart.push(item);
    this.snackBar.open(
      item.name + ' has been added to cart!', 
      '', 
      { 
        duration: 1000,
        verticalPosition: 'top'
      }
    );
  }
  
}
