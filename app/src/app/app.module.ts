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
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";


const appRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "list", component: CompanyListComponent },
  { path: "detail/:id", component: CompanyDetailComponent },
  { path: "map", component: CompanyYandexMapComponent },
  { path: "item", component: CompanyItemComponent },
  { path: "**", component: ErrorComponent },
]

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    ErrorComponent,
    MainComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AngularYandexMapsModule.forRoot(mapConfig)
    ],
  entryComponents:[CompanyListComponent],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
