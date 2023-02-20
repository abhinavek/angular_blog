import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostCreateComponent} from "./posts/post-create/post-create/post-create.component";
import {AllPostsComponent} from "./posts/all-post/all-posts/all-posts.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";
import {ViewPostComponent} from "./posts/view-post/view-post.component";

const routes: Routes = [
  {path:'',component:AllPostsComponent},
  {path:'create',component:PostCreateComponent},
  {path:'home',component:AllPostsComponent},
  { path: 'view/:id', component: ViewPostComponent },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
