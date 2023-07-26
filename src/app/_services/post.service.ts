import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public addPost(post: FormData) {
    return this.httpClient.post<Post>(this.API + "/addNewPost", post);
  }
}
