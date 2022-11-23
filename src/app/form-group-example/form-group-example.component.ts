import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.css']
})
export class FormGroupExampleComponent {

  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  profileForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
