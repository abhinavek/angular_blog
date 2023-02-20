import {Component, Input, NgModule} from '@angular/core';
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
export class PostComponent {
  @Input() post !:Post ;
  @Input() user !:UserInterface ;

  userNew = new User()


}
