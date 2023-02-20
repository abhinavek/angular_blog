import { Injectable } from '@angular/core';
import {PostsService} from "./posts.service";
import {User} from "../std/classes/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser = new User
  constructor() {
  }
  protected loginUser = () => {
    this.loggedInUser.first_name = "Abhinav"
    this.loggedInUser.last_name = "E K"
    this.loggedInUser.id = 1

    return this.loggedInUser
  }
}
