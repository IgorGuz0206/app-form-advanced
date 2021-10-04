// <form #userForm="ngForm" (ngSubmit)="onSubmit()">

//   <div class="mb-3">
//     <label class="form-label" for="name">Имя:</label>
//     <input [(ngModel)]="model.name" class="form-control" id="name" placeholder="" 
//     type="text" name="name" required #name="ngModel" maxlength="10" minlength="4">
//     <div *ngIf="formErrors.name" class="alert alert-danger">{{formErrors.name}}</div>
//   </div>

//   <div class="mb-3">
//     <label class="form-label" for="age">Возраст:</label>
//     <input [(ngModel)]="model.age" class="form-control" id="age" placeholder="" 
//     type="number" name="age" required #age="ngModel">
//     <div *ngIf="formErrors.age" class="alert alert-danger">{{formErrors.age}}</div>
//   </div>

//   <div class="mb-3">
//     <label class="form-label" for="role">Роль:</label>
//     <select [(ngModel)]="model.role" class="form-select" id="role" name="role">
//       <option disabled selected value="">Выберите роль</option>
//       <option *ngFor="let role of roles" [value]="role">{{role}}</option>
//     </select>
//   </div>

//   <div class="mb-3">
//    <button [disabled]="userForm.form.invalid" class="btn btn-info">Сохранить</button>
//   </div>

// </form>






// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { User } from '../user-class';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss'],
// })
// export class FormComponent implements OnInit, AfterViewInit {
//   roles: string[] = ['Гость', 'Модератор', 'Администратор'];
//   model: User = new User(1, '', '', 0);

//   formErrors: any = {
//     name: '',
//     age: '',
//   };

//   validationMessages: any = {
//     name: {
//       required: 'Имя обязательно',
//       minlength: 'Имя должно содержать минимум 4 символа',
//     },
//     age: {
//       required: 'Возраст обязателен',
//     },
//   };

//   @ViewChild('userForm') userForm: NgForm | null = null;

//   constructor() {}

//   ngOnInit(): void {}

//   ngAfterViewInit(): void {
//     this.userForm?.valueChanges?.subscribe(() => this.onValueChanged());
//   }

//   onSubmit(): void {
//     console.log('Submitted');
//   }

//   private onValueChanged(data?: any): void {
//     const form: any = this.userForm?.form;

//     Object.keys(this.formErrors).forEach((field) => {
//       this.formErrors[field] = '';

//       const control = form.get(field);

//       if (control && control.dirty && control.invalid) {
//         const message = this.validationMessages[field];

//         Object.keys(control.errors).forEach((key) => {
//           this.formErrors[field] += message[key] + ' ';
//         });
//       }
//     });
//   }
// }


