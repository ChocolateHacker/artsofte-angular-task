import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface ICompanies {
  id: number,
  business_name:string,
  suffix:string,
  industry:string,
  logo:string,
  type:string
  phone_number:string,
  full_address: string
}

@Injectable({
  providedIn: "root"
})

export class AboutCompany{
  response!: ICompanies[];

  constructor(private http:HttpClient) {
  }

  getBigData() {
    return this.http.get<ICompanies[]>("https://random-data-api.com/api/company/random_company?size=100")
  }
}
