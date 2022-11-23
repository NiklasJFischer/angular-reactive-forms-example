import { Component } from '@angular/core';

export type EditorType = 'formControl' | '';

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

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
