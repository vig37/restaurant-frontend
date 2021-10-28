import { Component, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu.service';
import { AppComponent } from '../app.component';
import { Menu } from '../menu';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  emptyCart = this.appComponent.hideBadge;
  cart: Menu[] = [];
  displayedColumns: string[] = ['name', 'price', 'count'];
  itemCount = 0;
  counter: any;

  cart2: any;

  constructor(
    private appComponent: AppComponent,
    private menuComponent: MenuComponent) { }

  ngOnInit(): void {
    this.appComponent.cart.forEach(element => {
      this.cart.push(element);
      
    });
    // console.log("Shopping CART contains: " + this.cart);

    const count = Array.from(
      this.cart.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()), 
      (([key, count]) => ({ key, count }))
    )

    if (count.length > 0) {
      this.counter = count[0].count;
    }
    
    // const result = [...this.cart.reduce( (mp, o) => {
    //     if (!mp.has(o.name)) mp.set(o.name, { ...o, count: 0 });
    //     mp.get(o.name).count++;
    //     return mp;
    // }, new Map).values()];
    // console.log(result);

  }

  clearCart() {
    this.appComponent.hideBadge = true;
    this.appComponent.num = 0;
    this.appComponent.cart = [];
    this.cart = [];
  }



  elements: any = [
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
  ];
  headElements = ['ID', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading'];
  
}
