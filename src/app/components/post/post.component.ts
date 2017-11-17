import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  private posts: Post[];

  constructor(private postService: PostService) { 

  }

  ngOnInit() {
    /* Chama o método GET */
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
