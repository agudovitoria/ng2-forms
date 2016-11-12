import { Component, OnInit } from '@angular/core';
import { IFormData } from './IFormData';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  formData:IFormData = {
    name: '',
    lastName: '',
    email: '',
    gender: null,
    dob: null,
    phone: null,
    address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        province: '',
        zip: null
    }
  };

  constructor() { 

  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    console.log('value is', value);
    console.log('valid', valid);

    if(valid) {
      this.formData = value;
    }
  }

}
