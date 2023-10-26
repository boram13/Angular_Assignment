import { Component } from '@angular/core';
 
//template and the property are included here in the curly braces 
@Component({
  selector: 'app-interpolation',
  template: `
  <h1>  {{title}} </h1>
  <p>  the length of the message is {{message.length}} </p>
  <p> thw sum of 2+2 is {{2+2}}
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
 // title and message are defined here in the component 
  title = "Welcome to Angular";
  message = 'This is an example of interpolation'
}
