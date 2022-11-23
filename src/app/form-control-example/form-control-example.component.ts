import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.css']
})
export class FormControlExampleComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}
