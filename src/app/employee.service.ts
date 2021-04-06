import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EMPLOYEES } from './mock-employees';
import { Employee } from './employee';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました。');
    return of(EMPLOYEES);
  }

  getEmployee(id: string): Observable<Employee> {
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました`);
    return of(EMPLOYEES.find(employee => employee.id.toString() === id));
  }
}
