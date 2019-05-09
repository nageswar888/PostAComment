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

  userFilter: any = { text: '',postedBy: '', createdAt: '', title: ''}

  public postings: any = [];
  public submitted: boolean;
  public formdata: any;


  public pageNo: number;
  public itemsPPage: number=4;
  public total:number;
  public page: any
  public pageno: any=1;

  public SearchByPost: any = ''
  public SearchByUser: any = ''
  public SearchByTitle: any = ''
  alert: any = false

  constructor(private service: PostService,
              private fb: FormBuilder,
              private Routes:Router) { }

  ngOnInit() {
    this.getpost()

    this.complexForm = this.fb.group({
      'postedBy': [null,  [Validators.required,Validators.pattern(/^[^-\s][a-zA-Z0-9_\s-]+$/)]], //if we put double quotes then / is not required
      'title': [null, [Validators.required,Validators.pattern("^[^-\\s][a-zA-Z0-9_\\s-]+$")]],
      'text': [null, [Validators.required,,Validators.pattern("^[^-\\s][a-zA-Z0-9_\\s-]+$")]]
    });
    }

  get f() { return this.complexForm.controls; }


  getpost() {
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.SearchByPost
    };
    this.service.getPost( this.page).subscribe((response) => {
      this.postings = response.rows;
      this.total = response.count
      console.log("postings in getpost",this.postings)
    })
  }

  getPagination(pageNumber){

    this.pageno=pageNumber;
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.SearchByPost
    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      console.log("postings in getPagination",this.postings)
      })
  }

  searchByPost(){
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.SearchByPost
    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      this.total = response.count

    })
    console.log("--",this.page.Search)
  }



  submit(value){
    this.submitted = true
    this.formdata = value
    if (this.complexForm.invalid) {
      return;
    }
    else{
      this.createPost(this.formdata)
      this.alert=true
    }
  }

  createPost(formdata){
    let user: any;
    this.service.createPost(formdata).subscribe(data=>{
      user = data;
    },
      ()=> {},
      () => {
      this.getpost()
      });
  }

  navigate(value){
    this.Routes.navigate(['/comments-likes', value])
    //console.log(value)
  }

}
