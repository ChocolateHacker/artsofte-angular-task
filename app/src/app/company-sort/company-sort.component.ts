import {Component, OnInit} from '@angular/core'
import {NewServiceService} from "../new-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ICompanies} from "../company-list/data";
@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent implements OnInit {
  servise!: NewServiceService;
  sortForm!: FormGroup;
  sortBy: Array<{ key: keyof ICompanies, text: string }> = [
    { key: "business_name", text: "business_name"},
    { key: "type", text: "type"},
    { key: "industry", text: "industry"}
  ];
  constructor(private formBuilder: FormBuilder, servise: NewServiceService) { }

  ngOnInit(): void {
  }

  sortList(type: string){
    this.servise.sorted(type);
  }
}
