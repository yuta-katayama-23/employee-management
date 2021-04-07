import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {
  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.employeeService.searchEmployees(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
