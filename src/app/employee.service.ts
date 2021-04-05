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

  getEmployee(): Observable<Employee[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました。');
    return of(EMPLOYEES);
  }
}
