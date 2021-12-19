import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Hello world</h1>\
    <nav>
      <a routerLink="">Главная</a>
      <br><br>
      <a routerLink="/list">Список компаний</a>
      <br><br>
      <a routerLink="/detail">О нас</a>
      <br><br>
      <a routerLink="/map">Мы на карте</a>
      <br><br>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'app';
}
