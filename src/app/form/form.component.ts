import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user-class';
import {
  FormControl,
  FormGroup,
  Validators,
  NgForm,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { emailValidator, rangeValidator } from '../custom-validators';
import { FORM_LABELS, FORM_PLACEHOLDERS, FORM_SUCCESS, FORM_ERRORS, FORM_VALIDATION_MESSAGES, FORM_ROLES} from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formLabels = FORM_LABELS
  formPlaceholders = FORM_PLACEHOLDERS
  formSuccess = FORM_SUCCESS
  formErrors: any = FORM_ERRORS
  validationMessages: any = FORM_VALIDATION_MESSAGES
  roles: string[] = FORM_ROLES
  userForm!: FormGroup;

  private user: User = new User(1, null, null, null, null, null);
  
  name!: AbstractControl
  password!: AbstractControl
  email!: AbstractControl
  age!: AbstractControl
  role!: AbstractControl

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {}

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      role: [this.user.role, [Validators.required]],
    });
    this.userForm.valueChanges.subscribe(() => this.onValueChanged());
    this.createControls();
  }

  onValueChanged(data?: any): void {
    const form: any = this.userForm;

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = ' ';

      const control = form.get(field);

      if ((control.dirty || control.touched) && control.invalid) {
        const message = this.validationMessages[field];

        Object.keys(control.errors).some(key => this.formErrors[field] = message[key]);
      }
    });
  }

  private createControls(): void {
    this.name = this.userForm.controls.name
    this.password = this.userForm.controls.password
    this.email = this.userForm.controls.email
    this.age = this.userForm.controls.age
    this.role = this.userForm.controls.role
  }
}
