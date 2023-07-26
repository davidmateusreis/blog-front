import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_model/file-handle.model';
import { Post } from '../_model/post.model';
import { PostService } from '../_services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    postAuthor: "",
    postTitle: "",
    postContent: "",
    createdAt: "",
    updatedAt: "",
    postImages: []
  }

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  addPost(addPostForm: NgForm) {

    const postFormData = this.prepareFormData(this.post);

    this.postService.addPost(postFormData).subscribe(
      (response: Post) => {
        addPostForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.post.postImages.push(fileHandle);

    }
  }

  prepareFormData(post: Post): FormData {
    const formData = new FormData();

    formData.append(
      'post',
      new Blob([JSON.stringify(post)], { type: 'application/json' })
    );

    for (var i = 0; i < post.postImages.length; i++) {
      formData.append(
        'imageFile',
        post.postImages[i].file,
        post.postImages[i].file.name
      );
    }

    return formData;
  }
}
