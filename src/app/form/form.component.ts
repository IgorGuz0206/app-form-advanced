import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user-class';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    password:['', [Validators.required, Validators.minLength(7)]]
  })

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
        
  }

}
