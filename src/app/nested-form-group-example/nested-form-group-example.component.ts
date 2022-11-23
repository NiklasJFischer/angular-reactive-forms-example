import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group-example',
  templateUrl: './nested-form-group-example.component.html',
  styleUrls: ['./nested-form-group-example.component.css'],
})
export class NestedFormGroupExampleComponent {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  streetControl = new FormControl('');
  cityControl = new FormControl('');
  stateControl = new FormControl('');
  zipControl = new FormControl('');

  addressGroup = new FormGroup({
    street: this.streetControl,
    city: this.cityControl,
    state: this.stateControl,
    zip: this.zipControl,
  });

  profileForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    address: this.addressGroup
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
