import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-controls-example',
  templateUrl: './select-controls-example.component.html',
  styleUrls: ['./select-controls-example.component.css'],
})
export class SelectControlsExampleComponent {
  allFruits: Fruit[] = [
    new Fruit('1', 'Apple', 'Red'),
    new Fruit('2', 'Banana', 'Yellow'),
    new Fruit('3', 'Kiwi', 'Green'),
  ];

  selectObjectControl = new FormControl(new Fruit('1', 'Apple', 'Red'));
  selectIdControl = new FormControl('1');
  radioControl = new FormControl('');

  selectForm = new FormGroup({
    selectObject: this.selectObjectControl,
    selectId: this.selectIdControl,
    radio: this.radioControl,
  });

  onSubmit() {
    console.warn(this.selectForm.value);
  }

  compareFruit(a: Fruit, b: Fruit): boolean {
    return a?.id === b?.id;
  }
}

class Fruit {
  constructor(public id: string, public name: string, public color: string) {}
}
