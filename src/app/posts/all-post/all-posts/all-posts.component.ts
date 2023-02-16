import {Component, Input} from '@angular/core';
import Post from "../../../../std/classes/Post";
import {User, UserInterface} from "../../../../std/classes/User";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent {
  samplePost : Post[] = [{
    id:1,
    content:'sample content',
    image:'sample.jpg',
    title:'Sample Post',
    authorId:1
  },
    {
      id:1,
      content:'sample content',
      image:'sample.jpg',
      title:'Sample Post',
      authorId:1
    },
    {
      id:1,
      content:'sample content',
      image:'sample.jpg',
      title:'Sample Post',
      authorId:1
    }]

  sampleUser : UserInterface = {
    id:0,
    avatar:'./assets/icons/avatar.png',
    first_name:'Abhinav',
    last_name:'E K'
  }
}
