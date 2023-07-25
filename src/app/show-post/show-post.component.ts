import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post } from '../_model/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts()
      .subscribe({
        next: (data) => {
          this.posts = data;
          console.log(data);
        },
        error: (error) => console.error(error)
      });
  }
}
