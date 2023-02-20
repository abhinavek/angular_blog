import { Injectable } from '@angular/core';
import Post from "../std/classes/Post";
import {HttpClient} from "@angular/common/http";
import {data} from "autoprefixer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // posts:Post[] = [{
  //   id:1,
  //   content:'sample content',
  //   image:'sample.jpg',
  //   title:'Sample Post',
  //   authorId:1
  // },
  //   {
  //     id:1,
  //     content:'sample content',
  //     image:'sample.jpg',
  //     title:'Sample Post',
  //     authorId:1
  //   },
  //   {
  //     id:1,
  //     content:'sample content',
  //     image:'sample.jpg',
  //     title:'Sample Post',
  //     authorId:1
  //   }]

  base_url:string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getPosts = () => {
    // return this.posts
    return this.http.get<Post[]>(this.base_url+'posts')
  }
  savePost = (post:Post): Observable<any> => {
    return this.http.post(this.base_url + 'posts', post)
  }
  getPostById = (id: string | null):Observable<any> => {
    return this.http.get(this.base_url+'posts/'+id)
  }

}
