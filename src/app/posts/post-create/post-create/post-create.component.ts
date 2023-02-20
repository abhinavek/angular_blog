import { Component } from '@angular/core';
import {PostComponent} from "../../post/post/post.component";
import Post from "../../../../std/classes/Post";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../std/classes/User";
import {PostsService} from "../../../../services/posts.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  newPost:string = ''
  enteredContent=''
  title: string = '';
  content: string = '';
  file!: File
  user!: User

  constructor(
    private userService:UserService,
    private postService:PostsService,
    private _snackBar: MatSnackBar
  ) {
    this.user = this.userService.loggedInUser
  }

  selectedFile = (event:any) =>{
    this.file=event.target.file
  }
  submitPost = () => {
    const postObj:Post = {
      title:this.title,
      content:this.content,
      image:'',
      authorId:this.user.id
    }
    this.postService.savePost(postObj).subscribe(data=>{
      if(data.acknowledged)
        this._snackBar.open('Successfully added','snackbarDis' ,{duration:2*1000});
    })
  }
   snackbarDis = () => {
    this._snackBar.dismiss()
  }
  onAddPost(content:HTMLTextAreaElement){
    alert(content.value)
    this.newPost='New Post Added!'
  }
}
