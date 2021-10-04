import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user-class';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  })

  constructor() {
    
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
        
  }

}
