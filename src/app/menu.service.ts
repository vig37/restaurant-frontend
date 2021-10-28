import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Menu } from './menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'http://localhost:8080/menu/v1/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrl)
      .pipe(
        // tap(_ => this.log('fetched menu itemss')),
        // catchError(this.handleError<Menu[]>('getHeroes', []))
      );
  }

  getMenuItem(id: number): Observable<Menu> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.get<Menu>(url).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
}
