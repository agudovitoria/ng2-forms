import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { IFormData } from './IFormData';
import { RegistrationFormValidators } from './registration-form.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  formData: FormGroup;

  constructor() { 

  }

  ngOnInit() {
    console.log('initializing...');

    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', ),
      email: new FormControl('', [Validators.required, , RegistrationFormValidators.email, RegistrationFormValidators.sameAs('email2', true)]),
      email2: new FormControl('', [Validators.required, RegistrationFormValidators.email, RegistrationFormValidators.sameAs('email', false)]),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormGroup({
        addressLine1: new FormControl('', Validators.required),
        addressLine2: new FormControl(''),
        city: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit({ value, valid }: { value: IFormData, valid: boolean }) {
    console.log(value, valid);
  }

  isInvalid(name:string) {
    let formControl:AbstractControl = this.formData.get(name);

    return formControl.invalid && formControl.touched;
  }
}