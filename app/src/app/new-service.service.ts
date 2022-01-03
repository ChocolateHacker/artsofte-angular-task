import { Injectable } from '@angular/core';
import {ICompanies} from "./company-list/data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {
  public CompanyList!: ICompanies[];
  private companyIndustries: any;
  private startComp!: ICompanies[];


  constructor(private http:HttpClient) {
    this.getData()
  }

  getBigData() {
    return this.http.get<ICompanies[]>("https://random-data-api.com/api/company/random_company?size=100")
  }

  getData(){
    this.getBigData().subscribe(x => {
      this.CompanyList = x
      this.startComp = x
    })
    return this.CompanyList
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

  findName(words: string) {
    if(words == ""){
      this.CompanyList = this.startComp
    } else {
      this.CompanyList = this.CompanyList.filter(x => {
        return x.business_name.toLocaleLowerCase().includes(words.toLocaleLowerCase())
      })
    }
  }

  getIndustries() {
    let industries = [];
    for(let i of this.CompanyList){
      industries.push(i.industry);
    }
    this.companyIndustries = new Set(industries)
    return this.companyIndustries
  }

  getTypes() {
    let types = [];
    for(let i of this.CompanyList){
      types.push(i.type);
    }
    return new Set(types)
  }

  filterIndustries(industry: string){
    if(industry == null || industry == ""){
      this.CompanyList = this.startComp
    } else {
      this.CompanyList = this.startComp.filter(x => {
        return x.industry.toLocaleLowerCase().includes(industry.toLocaleLowerCase())
      })
    }
  }

  filterTypes(type: string) {
    if (type == null || type == "") {
      this.CompanyList = this.startComp
    } else {
      this.CompanyList = this.startComp.filter(x => {
        return x.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
      })
    }
  }
}
