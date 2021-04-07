import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const employees = [
      { id: 11, firstName: '田中', lastName: '太郎', name: '田中 太郎', division: 'Angular開発1課', department: 'フロントエンド部' },
      { id: 12, firstName: '駒倉', lastName: '光紀', name: '駒倉 光紀', division: 'Angular開発1課', department: 'フロントエンド部' },
      { id: 13, firstName: '長田', lastName: '研太', name: '長田 研太', division: 'Angular開発1課', department: 'フロントエンド部' },
      { id: 14, firstName: '高藤', lastName: '友梨香', name: '高藤 友梨香', division: 'Angular開発1課', department: 'フロントエンド部' },
      { id: 15, firstName: '浜崎', lastName: '貴之', name: '浜崎 貴之', division: 'Angular開発1課', department: 'フロントエンド部' },
      { id: 16, firstName: '緑川', lastName: '睦', name: '緑川 睦', division: 'Angular開発2課', department: 'フロントエンド部' },
      { id: 17, firstName: '森谷', lastName: '怜奈', name: '森谷 怜奈', division: 'Angular開発2課', department: 'フロントエンド部' },
      { id: 18, firstName: '大槻', lastName: '祐大', name: '大槻 祐大', division: 'Angular開発2課', department: 'フロントエンド部' },
      { id: 19, firstName: '岩野', lastName: '紀之', name: '岩野 紀之', division: 'Angular開発2課', department: 'フロントエンド部' },
      { id: 20, firstName: '佐々木', lastName: '小次郎', name: '佐々木 小次郎', division: 'Angular開発2課', department: 'フロントエンド部' },
    ];
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
