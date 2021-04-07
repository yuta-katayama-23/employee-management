import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application:json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('社員一覧データを取得しました。')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  getEmployee(id: string): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        tap(_ => this.log(`社員データ(id=${id})を取得しました`)),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap(_ => this.log(`社員データ(id=${employee.id})を更新しました`)),
        catchError(this.handleError<any>(`updateEmployee id=${employee.id}`))
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap((newEmployee: Employee) => this.log(`社員データ(id=${newEmployee.id})を追加しました。`)),
        catchError(this.handleError<Employee>('addEmployee'))
      );
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/delete/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`社員データ(id=${id})を削除しました。`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
      );
  }

  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`${term}　にマッチする社員データが見つかりました。`)),
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    );
  }

  private log(message: string): void {
    this.messageService.add(`EmployeeService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
