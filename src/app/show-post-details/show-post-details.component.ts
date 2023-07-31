import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_model/post.model';

@Component({
  selector: 'app-show-post-details',
  templateUrl: './show-post-details.component.html',
  styleUrls: ['./show-post-details.component.scss']
})
export class ShowPostDetailsComponent implements OnInit {

  post!: Post;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data['post'];
    console.log(this.post);
  }

}
