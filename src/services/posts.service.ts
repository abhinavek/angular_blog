import { Injectable } from '@angular/core';
import Post from "../std/classes/Post";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = new BehaviorSubject({})
  constructor(private http: HttpClient) { }
  getPosts  = ():Observable<any> => {
    // return this.posts
    return this.posts.pipe(shareReplay())
  }
  getUpdatedPosts  = () => {
    // return this.posts
    this.http.get('posts/').subscribe(data=>this.posts.next(data))
  }
  savePost = (post:Post): Observable<any> => {
    return this.http.post( 'posts/', post)
  }
  updatePost = (post:Post): Observable<any> => {
    return this.http.put( 'posts/update', post)
  }
  getPostById = (id: string | null):Observable<any> => {
    return this.http.get('posts/'+id)
  }
  deletePost = (id:string):Observable<any> => {
    return this.http.delete('posts/',{body:{_id:id}})
  }
  uploadImage = (image: File):Observable<any> => {
    const formData = new FormData()
    formData.append('file',image,image.name)
    return this.http.post('posts/upload/',formData)
  }
}
