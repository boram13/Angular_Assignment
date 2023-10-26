import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  value: string="Hello Angular!";
  currentDate: Date = new Date();
  amount: number = 99.99

}
