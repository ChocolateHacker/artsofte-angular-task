import { Injectable } from '@angular/core';
import {ICompanies} from "./company-list/data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {
  public CompanyList!: ICompanies[];

  constructor(private http:HttpClient) {
    this.getBigData()
      .subscribe((x) => {
        this.CompanyList = x;
      })
  }

  getBigData() {
    return this.http.get<ICompanies[]>("https://random-data-api.com/api/company/random_company?size=100")
  }

  getID(id: Number){
    return this.CompanyList.find(x => x.id === id);
  }
}
