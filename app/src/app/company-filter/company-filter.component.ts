import {Component, OnInit} from '@angular/core';
import {NewServiceService} from "../new-service.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements OnInit {
  filterName!: any;
  filter!: FormGroup;
  industries: any;
  types: any;
  industry!: string;
  type!: string;

  constructor(private servise: NewServiceService) {
    this.industries = this.servise.getIndustries()
    this.types = this.servise.getTypes()
  }

  ngOnInit(): void {
  }

  searchName(){
    this.servise.findName(this.filterName)
  }

  searchIndustry() {
    this.servise.filterIndustries(this.industry);
  }

  searchType() {
    this.servise.filterTypes(this.type);
  }
}
