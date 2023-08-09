import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Post } from '../_model/post.model';
import { ImageProcessingService } from './image-processing.service';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post> {

  constructor(
    private postService: PostService,
    private imageProcessingService: ImageProcessingService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {

    const id = route.paramMap.get("postId");

    if (id) {
      return this.postService.getPostDetailsById(id)
        .pipe(
          map(post => this.imageProcessingService.createImages(post))
        )
    } else {
      return of(this.getPostDetails());
    }
  }

  getPostDetails() {
    return {
      postId: "",
      postAuthor: "",
      postTitle: "",
      postContent: "",
      createdAt: new Date,
      updatedAt: new Date,
      postImages: []
    }
  }
}