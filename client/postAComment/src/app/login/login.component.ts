import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(    private route:Router,
                  private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['knageswar888@gmail.com', [Validators.required,Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      password: ['nag007', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(formdata) {
    this.submitted = true;
    if (this.loginForm.invalid) {    // stop here if form is invalid
      return;
    }
    else {
      //this.validation(formdata)
      this.route.navigate(['/posts'])
    }
  }

}
