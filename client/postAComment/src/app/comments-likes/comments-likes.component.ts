import { Component, OnInit } from '@angular/core';
import {CommentsLikesService} from '../comments-likes.service';
import {LikesService} from '../likes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.css']
})
export class CommentsLikesComponent implements OnInit {

  flag= false;
  id: number;
  private sub: any;

  public comments: any;
  public likes: any;
  constructor(private service: CommentsLikesService,
              private likeservice: LikesService,
              private route: ActivatedRoute) { }

  add_comment(){
    this.flag= true
  }
  ngOnInit() {
    this.getting_id()
    this.getComments(this.id);
    this.getLikes();

  }
  getting_id(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

    });

  }

  getComments(id) {
/*
    console.log("id is-------",id)
*/
    this.service.getComments(id).subscribe((response) => {
      console.log("getcomment responce-----------",response);
      this.comments = response.rows;
    })
  }

  getLikes() {
    this.likeservice.getLikes().subscribe((response) => {
/*
      console.log(response);
*/
      this.likes= response.count
    })
  }
}
