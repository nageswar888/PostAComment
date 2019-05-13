import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  public alert = false
  private formdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]], //if we put double quotes then / is not required
      lastName: ['koppula', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: ['9951506361', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['knageswar888@gmail.com', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      password: ['nag007', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.registerForm.controls; }

  submit(data) {
    this.submitted = true;
    //console.log(data)
    this.formdata = data
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{
      this.router.navigate(["/login"])
      this.alert=true
    }
  }
}
