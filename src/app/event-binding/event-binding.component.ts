import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  // templateUrl: './event-binding.component.html',
  template:`

  <input (keyup) = "onKeyUp($event)">
     
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  onKeyUp(event:any){
    console.log('key pressed:', event.key)
  }


}


