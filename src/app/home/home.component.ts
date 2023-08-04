import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Post } from '../_model/post.model';
import { ImageProcessingService } from '../_services/image-processing.service';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  pageSize: number = 9;

  postDetails: Post[] = [];

  constructor(
    private postService: PostService,
    private imageProcessingService: ImageProcessingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(searchKey: string = "") {
    this.postService.getAllPosts(this.page, searchKey)
      .pipe(
        map((allPosts: Post[], i) => allPosts.map((post: Post) => this.imageProcessingService.createImages(post)))
      )
      .subscribe(
        (response: Post[]) => {
          console.log(response);
          this.postDetails = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  showPostDetails(postId: string) {
    this.router.navigate(['/show-post', { postId: postId }]);
  }

  searchByKeyword(searchkeyword: any) {
    console.log(searchkeyword);
    this.postDetails = [];
    this.getAllPosts(searchkeyword);
  }
}
