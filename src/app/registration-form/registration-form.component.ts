import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { IFormData } from './IFormData';
import { RegistrationFormValidators } from './registration-form.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  formData: FormGroup;

  constructor(private fb:FormBuilder) { 

  }

  ngOnInit() {
    this.formData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', ],
      email: ['', [Validators.required, RegistrationFormValidators.email, RegistrationFormValidators.sameAs('email2', true)]],
      email2: ['', [Validators.required, RegistrationFormValidators.email, RegistrationFormValidators.sameAs('email', false)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      address: this.fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        province: ['', Validators.required],
        zip: ['', Validators.required]
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