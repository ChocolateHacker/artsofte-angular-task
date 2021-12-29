import { Component, OnInit, Input } from '@angular/core';
import {ICompanies} from "./data";
import {NewServiceService} from "../new-service.service";

@Component({
  selector: 'app-company-list',
  templateUrl: "./company-list.component.html",
  styleUrls: [ "./company-list.component.css" ]
})
export class CompanyListComponent implements OnInit {

  companies!:ICompanies[];
  constructor(public service: NewServiceService) {
  }

  ngOnInit(): void {
    this.companies = this.service.CompanyList;
  }
}
