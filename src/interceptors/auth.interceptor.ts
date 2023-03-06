import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../std/classes/User";
import {UserService} from "../services/user.service";
import {data} from "autoprefixer";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: string = ''
    this.userService.loginUser().subscribe(data =>{
      token = data.auth_token
      console.log("token",data)
    })
    console.log("token",token)
    const cloned = request.clone({
      headers: request.headers.set("Authorization",
        "Bearer " + token)
    });
    return next.handle(cloned);
  }
}
