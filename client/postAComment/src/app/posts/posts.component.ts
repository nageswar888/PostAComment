import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public complexForm : FormGroup;

  public postings: any;
  public flag: boolean;
  public submitted: boolean;
  public formdata: any;
  public reverse: any;

  constructor(private service: PostService,
              private fb: FormBuilder,
              private Routes:Router) { }

  ngOnInit() {
    this.getpost()

    this.complexForm = this.fb.group({
      'text' : [null, Validators.required],
      'postedBy': [null,  Validators.required],
    });

    }

  get f() { return this.complexForm.controls; }


  getpost() {
    this.service.getPost().subscribe((response) => {
      console.log(response);
      this.reverse = response.rows;
      this.postings = this.reverse.reverse()
    })
  }

  form(){
    this.flag=true
  }

  submit(value){
    this.submitted = true
    this.formdata = value
    if (this.complexForm.invalid) {
      return;
    }
    else{
      this.createPost(this.formdata)
      location.reload();
    }

  }


  createPost(formdata){
    //console.log("------------------",formdata)
    this.service.createPost(formdata).subscribe(users=>{
      console.log(users);
    });
  }

  navigate(value){
    this.Routes.navigate(['/comments-likes', value])
    console.log(value)
  }

}
