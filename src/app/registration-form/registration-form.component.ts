import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormData } from './IFormData';

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
      name: new FormControl('Perico'),
      lastName: new FormControl('Palotes'),
      email: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      phone: new FormControl(''),
      address: new FormGroup({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        province: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }

  onSubmit({ value, valid }: { value: IFormData, valid: boolean }) {
    console.log(value, valid);
  }
}