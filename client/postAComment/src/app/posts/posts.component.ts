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

  userFilter: any = { text: '',postedBy: ''}

  public postings: any = [];
  public flag: boolean;
  public submitted: boolean;
  public formdata: any;

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
      //console.log(response);
      this.postings = response.rows;
    })
  }

  display_form(){
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
      this.flag=false
    }

  }

  createPost(formdata){
    let user: any;
    this.service.createPost(formdata).subscribe(data=>{
      user = data;
    },
      ()=> {},
      () => {
      this.postings.push(user);
      });
  }

  navigate(value){
    this.Routes.navigate(['/comments-likes', value])
    //console.log(value)
  }

}
