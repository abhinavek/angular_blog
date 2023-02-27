import {Component, Input, NgModule, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit{
  ngOnInit(): void {
    this.user = {
      _id: this.post?.author_id,
      first_name: this.post?.author_first_name,
      last_name: this.post?.author_last_name,
      avatar: this.post?.author_avatar
    }
  }
  @Input() post !: Post ;
  @Input() user !: UserInterface
}
