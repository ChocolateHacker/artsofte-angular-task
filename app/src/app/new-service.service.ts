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

  sorted(sortBy:string){
    if(sortBy === "business_name"){
      this.CompanyList = this.CompanyList.sort((firstItem, secondItem) => {
        if(firstItem.business_name > secondItem.business_name) {
          return 1;
        }
        else if(firstItem.business_name < secondItem.business_name) {
          return -1
        } else return 0
      })
    } else if(sortBy === "type"){
      this.CompanyList = this.CompanyList.sort((firstItem, secondItem) => {
        if(firstItem.type > secondItem.type) {
          return 1;
        }
        else if(firstItem.type < secondItem.type) {
          return -1
        } else return 0
      })
    } else if(sortBy === "industry") {
      this.CompanyList = this.CompanyList.sort((firstItem, secondItem) => {
        if (firstItem.industry > secondItem.industry) {
          return 1;
        } else if (firstItem.industry < secondItem.industry) {
          return -1
        } else return 0
      })
    }
  }

  filtered() {

  }
}
