import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  // templateUrl: './property-binding.component.html',
  template:`

    <button [disabled] = "isButtonDissabled">Click me </button>
    <p> the result of 10-5 eshte {{10-5}} </p>
    <input [value] = "getInitialValue()">
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
 isButtonDissabled = true;
 getInitialValue(){
  return ' Initial value' ;
 }
}
