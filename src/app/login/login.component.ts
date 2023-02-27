import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {data} from "autoprefixer";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  constructor(private authService:AuthService,  private router: Router) {
  }
  login = () => {

    this.authService.login(this.email,this.password).subscribe((data)=>{
      console.log(data)
      if (data.status == 'success')
      {
        this.router.navigate(['home']).then(r => console.log("failed",r))
      }
    })
  }
}
