import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  menu!: Menu; 

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMenuItem();
  }

  getMenuItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.menuService.getMenuItem(id)
      .subscribe(item => this.menu = item);
  }

  goBack() {
    this.location.back();
  }
}
