import { Component, OnInit } from '@angular/core';
import {ICompanies} from "../company-list/data";
import {ActivatedRoute} from "@angular/router";
import {NewServiceService} from "../new-service.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: "./company-detail.component.html",
  styleUrls: [ "./company-detail.component.css" ]
})
export class CompanyDetailComponent implements OnInit {
  company!: ICompanies | undefined;
  constructor(private routing: ActivatedRoute, private service: NewServiceService) {
  }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    let id = Number(this.routing.snapshot.paramMap.get('id'))
    this.company = this.service.getID(id)
    return this.company
  }
}
