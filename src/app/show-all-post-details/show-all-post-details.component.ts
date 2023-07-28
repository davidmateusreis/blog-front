import { Component, OnInit } from '@angular/core';
import { Post } from '../_model/post.model';
import { PostService } from '../_services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageProcessingService } from '../_services/image-processing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-show-all-post-details',
  templateUrl: './show-all-post-details.component.html',
  styleUrls: ['./show-all-post-details.component.scss']
})
export class ShowAllPostDetailsComponent implements OnInit {

  postDetails: Post[] = [];

  constructor(
    private postService: PostService,
    private imageProcessingService: ImageProcessingService
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts() {
    this.postService.getAllPosts()
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

  deletePost(postId: string) {
    this.postService.deletePost(postId).subscribe(
      (response) => {
        console.log(response);
        this.getAllPosts();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImages(post: Post) {
    console.log(post);
  }
}
