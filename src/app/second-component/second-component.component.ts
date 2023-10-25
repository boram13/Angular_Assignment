import { Component } from '@angular/core';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
//one way binding/interpolation
  // status = 'pending';

  country = 'US';

  displayCountry(){
    console.log(this.country)
  }

}
