import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <h1>Demonstration of Template</h1>

    <label for="textInput">Enter text:</label>
    <input type="text" id="textInput" name="textInput">

    <h2>Marvellous Infosystems</h2>
  `,
  styles: [`
    #textInput {
      color: blue;
    }
    h2 {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'Template';
}
