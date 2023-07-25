import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../_services/post.service';
import { Post } from '../_model/post.model';

@Component({
  selector: 'app-show-post-details',
  templateUrl: './show-post-details.component.html',
  styleUrls: ['./show-post-details.component.scss']
})
export class ShowPostDetailsComponent implements OnInit {

  post !: Post;
  postId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['id'];
    });

    this.postService.getPostById(this.postId)
      .subscribe((data: Post) => {
        this.post = data;
      },
        (error: any) => {
          console.log(error);
        });
  }
}
