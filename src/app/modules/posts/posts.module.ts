import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostCreateComponent} from "../../posts/post-create/post-create/post-create.component";
import {AllPostsComponent} from "../../posts/all-post/all-posts/all-posts.component";
import {ViewPostComponent} from "../../posts/view-post/view-post.component";
import {EditPostComponent} from "../../posts/edit-post/edit-post.component";
import {PostDeleteComponent} from "../../posts/post-delete/post-delete.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {FileValidationDirective} from "../../../directives/file-validation.directive";
import {AppComponent} from "../../app.component";


@NgModule({
  declarations: [
    // PostCreateComponent,
    // AllPostsComponent,
    // EditPostComponent,
    // PostDeleteComponent,
    // FileValidationDirective,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports:[
    AllPostsComponent,
    FileValidationDirective,
  ],
})
export class PostsModule { }
