import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css'],
})
export class ValidationExampleComponent {
  firstNameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [this.validateLastName]);

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
    address: this.addressGroup,
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  private validateLastName(control: AbstractControl): ValidationErrors | null {
    if (control.value != null && control.value.length > 2) {
      return null;
    }

    return { lastNameFormat: true };
  }
}
