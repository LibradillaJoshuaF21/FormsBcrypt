import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  jobForm = this.fb.group({
    cname: ['', {
      validators: [Validators.required, Validators.minLength(1)],
    }],
    jname: ['', {
      validators: [Validators.required, Validators.minLength(2)],
    }],
    yearemploy: ['', {
      validators: [Validators.required, Validators.minLength(1)],
    }],
    cemail: ['', {
      validators: [Validators.required, Validators.minLength(6), Validators.email],
    }],
    ccontact: ['', {
      validators: [Validators.required, Validators.minLength(6), Validators.pattern("^[0-9]*$")],
    }],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  tocName = '';
  tojName = '';
  toyearEmploy = 0;
  tocEmail = '';
  tocContact = '';
  isValid = false;

  onSubmit(){
    if(this.jobForm.valid){
      this.tocName = this.jobForm.controls['cname'].value;
      this.tojName = this.jobForm.controls['jname'].value;
      this.toyearEmploy = this.jobForm.controls['yearemploy'].value;
      this.tocEmail = this.jobForm.controls['cemail'].value;
      this.tocContact = this.jobForm.controls['ccontact'].value;
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  get cname(){
    return this.jobForm.controls['cname'];
  }

  get jname(){
    return this.jobForm.controls['jname'];
  }

  get yearemploy(){
    return this.jobForm.controls['yearemploy'];
  }

  get cemail(){
    return this.jobForm.controls['cemail'];
  }

  get ccontact(){
    return this.jobForm.controls['ccontact'];
  }

  get valid(){
    return this.jobForm;
  }

}
