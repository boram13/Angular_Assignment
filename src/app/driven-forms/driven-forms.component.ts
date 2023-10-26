import { Component } from '@angular/core';

@Component({
  selector: 'app-driven-forms',
  templateUrl: './driven-forms.component.html',
  styleUrls: ['./driven-forms.component.css']
})
export class DrivenFormsComponent {

  submitForm(){
    console.log('Form submitted')
  }
}
