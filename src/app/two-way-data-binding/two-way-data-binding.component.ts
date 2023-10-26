import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  // templateUrl: './two-way-data-binding.component.html',
  template:`

  <input [(ngModel)]='name' placeholder = "Enter your name">
  <p> Welcome,{{name}}! </p>
  `,

  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  //here we take the input prom user, the value that will be a key in our interpolation
    name='';

}
