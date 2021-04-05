import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees =  EMPLOYEES;

  employee: Employee = {
    id: 1,
    firstName: '田中',
    lastName: '太郎',
    division: 'Angular開発1課',
    department: 'フロントエンド部'
  };

  selectedEmployee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}
