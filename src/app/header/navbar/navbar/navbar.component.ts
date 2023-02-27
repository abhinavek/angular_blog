import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../../std/classes/User";
import {UserService} from "../../../../services/user.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  avatar:string= ''
  user!:User

  constructor(private userService:UserService,private router: Router) {
      this.userService.loginUser().subscribe(data =>{
      console.log("login data",data)
      this.user = data
      this.avatar = this.user?.avatar || './assets/icons/avatar.png'
    })

  }

  logout=()=>{
    localStorage.removeItem('user')
    this.userService.userChange()
    this.router.navigate(['login'],).then(r => console.log("failed",r))
  }
}


