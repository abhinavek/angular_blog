import { Injectable } from '@angular/core';
import Post from "../std/classes/Post";
import {HttpClient} from "@angular/common/http";
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


  constructor(private http: HttpClient) { }

  getPosts = () => {
    // return this.posts
    return this.http.get<Post[]>('posts')
  }
  savePost = (post:Post): Observable<any> => {
    return this.http.post( 'posts', post)
  }
  getPostById = (id: string | null):Observable<any> => {
    return this.http.get('posts/'+id)
  }
  uploadImage = (image: File):Observable<any> => {
    const formData = new FormData()
    formData.append('file',image,image.name)
    return this.http.post('posts/upload/',formData)
  }
}
