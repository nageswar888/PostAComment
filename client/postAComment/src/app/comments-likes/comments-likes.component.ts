import { Component, OnInit } from '@angular/core';
import {CommentsLikesService} from '../comments-likes.service';
import {LikesService} from '../likes.service';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.css']
})
export class CommentsLikesComponent implements OnInit {

  p: number = 1;
  collection: any[]/* = someArrayOfThings*/;

  public complexForm : FormGroup;

  flag= false;
  id: number;
  private sub: any;
  public comments: any =[];
  public likes: any;
  public postings: any;
  public submitted: boolean;
  private formdata: any;


  constructor(private cservice: CommentsLikesService,
              private likeservice: LikesService,
              private route: ActivatedRoute,
              private service: PostService,
              private fb: FormBuilder,
              private Router: Router) { }


  display_form(){
    this.flag= true
  }

  ngOnInit() {
    this.getting_id()
    this.getComments(this.id);
    this.getLikes(this.id);
    this.getPostInComt(this.id)

    //console.log("------",this.id)

    this.complexForm = this.fb.group({
      'text' : [null, Validators.required],
      'commentedBy': [null,  Validators.required],
      'postId':[this.id]
    });
  }

  get f() { return this.complexForm.controls; }


  getting_id(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  getComments(id) {
    //console.log("id in get comments-------",id)
    this.cservice.getComments(id).subscribe((response) => {
      this.comments = response;
      //console.log("comments responce-----------",this.comments);
    })
  }

  getLikes(id) {
    //console.log("id in get Likes-------",id)
    this.likeservice.getLikes(id).subscribe((response) => {
      this.likes= response
      //console.log("----------",this.likes)
    })
  }

  post_likes(){
    let data
    console.log("--------",this.id)
    let params = this.id
    this.likeservice.postLike(params).subscribe((responce) => {
      data = responce
    }, () =>{},
      () => { this.likes.push(data)})
    //location.reload();
  }

  getPostInComt(id) {
    this.service.getPostInComt(id).subscribe((response) => {
      //console.log(response);
      this.postings = response;
    })
  }

  submit(value){
    this.submitted = true
    this.formdata = value

    if (this.complexForm.invalid) {
      return;
    }
    else{
      this.createComment(this.formdata)
      this.flag= false   //for disappiaring of form
      //location.reload()
    }
    }

  createComment(formdata){
    let data
  //console.log("------------------",formdata)
  this.cservice.createComment(formdata).subscribe(users=>{
  console.log(users);
  data = users
  }, () =>{},
    () =>{ this.comments.push(data)});
  }


}

