import {Component, ViewChild, ViewChildren} from '@angular/core';
import {PostComponent} from "../../post/post/post.component";
import Post from "../../../../std/classes/Post";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../std/classes/User";
import {PostsService} from "../../../../services/posts.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgForm} from '@angular/forms'
import {data} from "autoprefixer";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  newPost:string = ''
  enteredContent=''
  title: string = ''
  content: string = ''
  userId: string = ''
  file!: File
  file1!: string
  constructor(
    private userService:UserService,
    private postService:PostsService,
    private _snackBar: MatSnackBar
  ) {
    this.userService.loginUser().subscribe(data=>{
      console.log("login data create",data)
      this.userId =data?._id
    })
  }

  selectedFile = (event:any) =>{
    this.file=event.target.files[0]
    console.log(this.file.name)
  }
  submitPost = () => {
    this.postService.uploadImage(this.file).subscribe(data=>{
      const postObj:Post = {
        title:this.title,
        content:this.content,
        image:data.link,
        author_id:this.userId
      }
      this.postService.savePost(postObj).subscribe(data=>{
        if(data.acknowledged)
        {
          let snackBarRef =this._snackBar.open('Successfully added','close' ,{duration:2*1000});
          snackBarRef.onAction().subscribe(()=>this._snackBar.dismiss())
        }
      })
    })
  }
}
