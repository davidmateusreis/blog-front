import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPost(newPostForm: NgForm) {
    this.postService.addPost(newPostForm.value).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
