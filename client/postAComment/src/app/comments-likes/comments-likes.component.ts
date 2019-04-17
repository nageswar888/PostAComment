import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.css']
})
export class CommentsLikesComponent implements OnInit {

  flag= false;
  constructor() { }

  add_comment(){
    this.flag= true
  }
  ngOnInit() {
  }

}
