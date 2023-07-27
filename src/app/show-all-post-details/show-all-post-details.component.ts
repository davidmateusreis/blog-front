import { Component, OnInit } from '@angular/core';
import { Post } from '../_model/post.model';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-all-post-details',
  templateUrl: './show-all-post-details.component.html',
  styleUrls: ['./show-all-post-details.component.scss']
})
export class ShowAllPostDetailsComponent implements OnInit {

  postDetails: Post[] = [];
  
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {
        console.log(response);
        this.postDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
