import { Component, OnInit } from '@angular/core';
import {FormData} from './iFormData';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  formData:FormData = {
    name: '',
    lastName: '',
    gender: null,
    dob: null,
    phone: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      zip : null
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }) {
    console.log('value', value);
    console.log('valid', valid);
    if(valid) {
      this.formData = Object.assign({}, value);
      alert('El formulario es valido');
    } else {
      alert('El formulario NO es valido');
    }
  }

  isInvalid(model:NgModel) {
    return model.invalid && model.touched;
  }

}
