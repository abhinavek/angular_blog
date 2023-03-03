import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import Post from "../../../../std/classes/Post";
import {User, UserInterface} from "../../../../std/classes/User";
import {AppComponent} from "../../../app.component";
import {PostCreateComponent} from "../../post-create/post-create/post-create.component";
import {NavbarComponent} from "../../../header/navbar/navbar/navbar.component";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "../../../../services/user.service";
import {data} from "autoprefixer";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {PostDeleteComponent} from "../../post-delete/post-delete.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit{
  @Input() post !: Post ;
  @Input() user !: UserInterface
  constructor(private userService:UserService, public dialog: MatDialog) {
  }
  userId:string=''
  deleted:boolean=false
  ngOnInit(): void {
    this.user = {
      _id: this.post?.author_id,
      first_name: this.post?.author_first_name,
      last_name: this.post?.author_last_name,
      avatar: this.post?.author_avatar
    }
    this.userService.loginUser().subscribe(data=>this.userId = data?._id)
  }
  deletePost = () => {
    this.dialog.open(PostDeleteComponent, {
      data:{
        id:this.post._id,
      }
    });
  }
  hideDialog = () => {
    this.dialog.closeAll()
  }
}
