import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllPostsComponent} from "../../posts/all-post/all-posts/all-posts.component";
import {AuthGuardService} from "../../../auth/auth-guard.service";
import {PostCreateComponent} from "../../posts/post-create/post-create/post-create.component";
import {ViewPostComponent} from "../../posts/view-post/view-post.component";
import {EditPostComponent} from "../../posts/edit-post/edit-post.component";

const routes: Routes = [
  {path:'',component:AllPostsComponent,canActivate: [AuthGuardService] },
  {path:'create',component:PostCreateComponent},
  {path:'home',component:AllPostsComponent,canActivate: [AuthGuardService]},
  { path: 'view/:id', component: ViewPostComponent,canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: EditPostComponent,canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
