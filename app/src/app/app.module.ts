import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "list", component: CompanyListComponent },
  { path: "detail", component: CompanyDetailComponent },
  { path: "map", component: CompanyYandexMapComponent },
  { path: "**", component: ErrorComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    ErrorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
