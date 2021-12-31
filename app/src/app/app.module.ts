import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import {NewServiceService} from "./new-service.service";
import { CompanySortComponent } from './company-sort/company-sort.component';


const appRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "list", component: CompanyListComponent },
  { path: "detail/:id", component: CompanyDetailComponent },
  { path: "map", component: CompanyYandexMapComponent },
  { path: "item", component: CompanyItemComponent },
  { path: "**", component: ErrorComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    ErrorComponent,
    MainComponent,
    CompanyItemComponent,
    CompanySortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
