import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  /*posts = [{ "text": "hello", "postedBy": "nageswar"},
           { "text": "hai", "postedBy": "kamal"},
           { "text": "bye", "postedBy": "sai"},
           { "text": "good bye", "postedBy": "kamal"}]
*/
  public postings: any;

  constructor(private service: PostService ) { }

  ngOnInit() {
    this.getpost()

    }
  getpost() {
    this.service.getPost().subscribe((response) => {
      console.log(response);
      this.postings = response.rows;
    })
  }

}
