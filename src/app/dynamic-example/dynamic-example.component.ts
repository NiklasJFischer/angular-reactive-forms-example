import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.css'],
})
export class DynamicExampleComponent {
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

  aliasesArray = new FormArray([new FormControl('')]);

  profileForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    address: this.addressGroup,
    aliases: this.aliasesArray
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliasesArray.push(new FormControl(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
