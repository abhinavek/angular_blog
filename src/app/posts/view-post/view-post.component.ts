import { Component, OnInit  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../services/posts.service";
import Post from "../../../std/classes/Post";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit{
  postId!:string | null
  post!:Post
  constructor(private _Activatedroute:ActivatedRoute, private postService: PostsService) {
    this._Activatedroute.paramMap.subscribe(paramMap => {
      this.postId = paramMap.get('id');
    });
  }
  ngOnInit(){
    this.postService.getPostById(this.postId).subscribe(data=>this.post = data[0])
  }
}
