import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [{ "text": "hello", "postedBy": "nageswar"},
           { "text": "hai", "postedBy": "kamal"},
           { "text": "bye", "postedBy": "sai"},
           { "text": "good bye", "postedBy": "kamal"}]

  constructor() { }

  ngOnInit() {
  }

}
