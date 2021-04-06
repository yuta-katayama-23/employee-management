import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  divisions: string[];
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getDivisions();
    this.getEmployees();
  }

  getDivisions(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        const divSet = new Set<string>();
        employees.forEach(employee => {
          divSet.add(employee.division);
        });

        this.divisions = Array.from(divSet);
      });
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees.slice(1, 5);
      });
  }
}
