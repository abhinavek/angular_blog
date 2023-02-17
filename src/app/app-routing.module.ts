import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostCreateComponent} from "./posts/post-create/post-create/post-create.component";
import {AllPostsComponent} from "./posts/all-post/all-posts/all-posts.component";

const routes: Routes = [
  // {path:'',component:AllPostsComponent},
  {path:'create',component:PostCreateComponent},
  {path:'view',component:AllPostsComponent},
  {path:'**',loadChildren: () => new Promise( () => { window.location.href = 'https://external-link.com/'; })},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
