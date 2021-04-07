# EmployeeManagement

- 社員管理アプリです
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Function

### 今後実装する機能

- 組織図から課を選択すると、その課に属する社員一覧が、一覧画面で閲覧できる
- 社員を新規で追加する際には、既存の部・課がサジェストされる
- 社員 ID も含めて新規登録でき、同じ社員 ID で登録しようとするとエラーになるバリデーションがある
- 登録・編集・削除の際に成功した旨が通知される
- 削除の際には、削除確認をするポップアップが表示され、それで OK にしたら削除される
- DynamoDB へデータが保存される（DB は別のものにするのも OK）

## アーキテクチャ

- Node.js（Spring boot） による Server Side
- Firebase による Auth マネジメント
- EC2 上で Run

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
