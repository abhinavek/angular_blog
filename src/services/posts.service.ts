import { Injectable } from '@angular/core';
import Post from "../std/classes/Post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:Post[] = [{
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


  constructor(private http: HttpClient) { }

  getPosts(){
    // return this.posts
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }

}
