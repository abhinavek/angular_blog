import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create/post-create.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './header/navbar/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {PostComponent} from './posts/post/post/post.component';
import { AllPostsComponent } from './posts/all-post/all-posts/all-posts.component';
import {MatCardModule} from '@angular/material/card';

import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import {BaseUrlInterceptor} from "../interceptors/base-url.interceptor";
import {FileValidationDirective} from "../directives/file-validation.directive";
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostDeleteComponent } from './posts/post-delete/post-delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import { GridViewComponent } from './posts/grid-view/grid-view.component';
import { TestComponent } from './posts/test/test.component';
import {AuthInterceptor} from "../interceptors/auth.interceptor";
import { PostMenuComponent } from './components/post-menu/post-menu.component';
import { TagsComponent } from './components/tags/tags.component';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostCreateComponent,
    NavbarComponent,
    PostComponent,
    AllPostsComponent,
    NotFoundComponent,
    ViewPostComponent,
    LoginComponent,
    FileValidationDirective,
    EditPostComponent,
    PostDeleteComponent,
    GridViewComponent,
    TestComponent,
    PostMenuComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    AppRoutingModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: "BASE_API_URL", useValue: 'http://localhost:3000/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
