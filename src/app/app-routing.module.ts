import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostCreateComponent} from "./posts/post-create/post-create/post-create.component";
import {AllPostsComponent} from "./posts/all-post/all-posts/all-posts.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";
import {ViewPostComponent} from "./posts/view-post/view-post.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {EditPostComponent} from "./posts/edit-post/edit-post.component";
import {GridViewComponent} from "./posts/grid-view/grid-view.component";
import {TestComponent} from "./posts/test/test.component";

const routes: Routes = [
  {path:'',component:AllPostsComponent,canActivate: [AuthGuardService] },
  {path:'create',component:PostCreateComponent,canActivate:[AuthGuardService]},
  {path:'home',component:AllPostsComponent,canActivate: [AuthGuardService]},
  { path: 'view/:id', component: ViewPostComponent,canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: EditPostComponent,canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'grid', component: GridViewComponent },
  { path: 'test', component: TestComponent },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
