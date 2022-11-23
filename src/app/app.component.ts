import { Component } from '@angular/core';

export type EditorType = 'formControl' | 'formGroup' | 'nested' | 'validation' | 'dynamic' | 'select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'formControl';

  get showFormControlEditor() {
    return this.editor === 'formControl';
  }
  get showFormGroupEditor() {
    return this.editor === 'formGroup';
  }
  get showNestedEditor() {
    return this.editor === 'nested';
  }
  get showValidationEditor() {
    return this.editor === 'validation';
  }
  get showDynamicEditor() {
    return this.editor === 'dynamic';
  }
  get showSelectEditor() {
    return this.editor === 'select';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
