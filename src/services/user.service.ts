import { Injectable } from '@angular/core';
import {PostsService} from "./posts.service";
import {User} from "../std/classes/User";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from '../constants/endpoints'
import {BehaviorSubject, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser = new BehaviorSubject(null)

  constructor(private http:HttpClient) {
  }
  userChange = () => {
    if(JSON.parse(<string>localStorage.getItem('user'))?._id !== '0')
       this.loggedInUser.next(
         JSON.parse(<string>localStorage.getItem('user'))
       )
  }
  loginUser = ():Observable<any> => {
    return this.loggedInUser
  }
}
