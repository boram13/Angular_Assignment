import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){}
  ngOnInit():void{
      this.myForm = this.formBuilder.group({
        name:['',Validators.required],
        email:['', [Validators.required, Validators.email]],

      })

  }
  submitForm(){

    console.log('Form submitted')

  }

}
