import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private userService:UserService) { }
  login = (email:string,password:string):Observable<any>=> {
    return new Observable((ob)=>{
      this.http.post('users/login',{email:email,password:password}).subscribe(data=>{
        if(data)
        {
          localStorage.setItem('user',JSON.stringify((data as Array<object>)))
          this.userService.userChange()
          ob.next({status:"success"})
        }
        else {
          ob.next("failed")
        }
      })
    })

    // return 'failed1'

  }
  isLoggedIn = ():boolean => {
      let user = localStorage.getItem('user')
      return !!user;
  }
}
