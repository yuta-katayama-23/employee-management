import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  onSelect(employee: Employee): void {
    this.messageService.add(`EmployeeComponent: 社員データ(id=${employee.id})が選択されました`);
    this.router.navigate([`/detail/${employee.id}`]);
  }

  getEmployee(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  add(firstName: string, lastName: string, division: string, department: string): void {
    if (!firstName && !lastName && !division && !department) { return; }
    this.employeeService.addEmployee({ firstName, lastName, division, department } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });

  }

  clear(firstName, lastName, department, division): void {
    firstName.value = '';
    lastName.value = '';
    department.value = '';
    division.value = '';
  }

}
