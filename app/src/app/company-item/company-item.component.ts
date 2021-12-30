import { Component, OnInit, Input } from '@angular/core';
import {ICompanies} from "../company-list/data";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company!: ICompanies;
  constructor() { }

  ngOnInit(): void {
  }
}
