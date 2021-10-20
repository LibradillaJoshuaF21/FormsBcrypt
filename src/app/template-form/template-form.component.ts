import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fName = '';
  lName = '';
  Age = 0;
  Email = '';
  Password = '';
  isValid = false;
  
  onSubmit(logInForm: NgForm){
    if(logInForm.valid){
      const salt = bcrypt.genSaltSync(10);
      this.fName = logInForm.value.fname;
      this.lName = logInForm.value.lname;
      this.Age = logInForm.value.age;
      this.Email = logInForm.value.email;
      this.Password = bcrypt.hashSync(logInForm.value.password, 10);
      this.isValid = true;
    }
    else{
      this.isValid = false;
    }
    
  }


}
