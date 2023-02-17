import {Component, Input} from '@angular/core';
import Post from "../../../../std/classes/Post";
import {User, UserInterface} from "../../../../std/classes/User";
import {PostsService} from "../../../../services/posts.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent {
  samplePost : Post[] = []
  constructor(private postService:PostsService) {
  }
  ngOnInit():void {
    this.postService.getPosts().subscribe(data=>{
      this.samplePost = data
    })
  }
  sampleUser : UserInterface = {
    id:0,
    avatar:'./assets/icons/avatar.png',
    first_name:'Abhinav',
    last_name:'E K'
  }
}
