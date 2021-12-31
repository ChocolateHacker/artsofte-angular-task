import {Component, OnInit} from '@angular/core'
import {NewServiceService} from "../new-service.service";
@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent implements OnInit {
  servise!: NewServiceService;
  constructor(servise: NewServiceService) { }

  ngOnInit(): void {
  }

  sortList(type: string){
    this.servise.sorted(type);
  }
}
