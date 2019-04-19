import { Component, OnInit } from '@angular/core';
import {CommentsLikesService} from '../comments-likes.service';
import {LikesService} from '../likes.service';


@Component({
  selector: 'app-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.css']
})
export class CommentsLikesComponent implements OnInit {

  flag= false;
  public comments: any;
  public nag: any;
  constructor(private service: CommentsLikesService,
              private likeservice: LikesService ) { }

  add_comment(){
    this.flag= true
  }
  ngOnInit() {
    this.getComments()
    this.getLikes()
  }

  getComments() {
    this.service.getComments().subscribe((response) => {
      console.log(response);
      this.comments = response.rows;
    })
  }

  getLikes() {
    this.likeservice.getLikes().subscribe((response) => {
      console.log(response);
      this.nag= response.count
    })
  }
}
