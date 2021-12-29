import { Component, OnInit, Input } from '@angular/core';
import {ICompanies} from "../company-list/data";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {NewServiceService} from "../new-service.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: "./company-detail.component.html",
  styleUrls: [ "./company-detail.component.css" ]
})
export class CompanyDetailComponent implements OnInit {

  @Input() company!: ICompanies
  constructor() { }

  ngOnInit(): void {
  }

}
