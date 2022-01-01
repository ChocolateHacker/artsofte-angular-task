import {Pipe, PipeTransform} from "@angular/core";
import {NewServiceService} from "../new-service.service";
import {ICompanies} from "../company-list/data";

@Pipe({
  name:"sort"
})
export class sortPipe implements PipeTransform {
  constructor(private servise: NewServiceService) {
  }

  transform(companies: ICompanies[], text:string): Array<ICompanies> {
    return companies
  }
}
