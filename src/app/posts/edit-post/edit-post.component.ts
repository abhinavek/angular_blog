import { Component } from '@angular/core';
import Post from "../../../std/classes/Post";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../services/posts.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  postId!:string | null
  post!:Post
  title: string = ''
  content: string = ''
  userId: string = ''
  file!: File
  file1!: string

  constructor(private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute, private postService: PostsService, private _snackBar: MatSnackBar) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.postId = paramMap.get('id');
    });
  }
  ngOnInit(){
    this.postService.getPostById(this.postId).subscribe(data=>{
      this.post = data[0]
      this.title = this.post.title
      this.content = this.post.content
      this.file1 = this.post.image
    })
  }

  selectedFile = (event:any) =>{
    this.file=event.target.files[0]
    console.log("blob",URL.createObjectURL(this.file))
    this.file1 = URL.createObjectURL(this.file)
    console.log(this.file.name)
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  updatePost = () => {
    let postObj:Post = {
      author_id: this.post.author_id,
      title:this.title,
      content:this.content,
      image:this.file1,
      _id:this.post._id
    }
    if(this.file)
    {
      this.postService.uploadImage(this.file).subscribe(data=>{
        postObj.image = data.link
        this.postService.updatePost(postObj).subscribe(data=>{
          if(data.acknowledged)
          {
            let snackBarRef =this._snackBar.open('Successfully added','close' ,{duration:2*1000});
            snackBarRef.onAction().subscribe(()=>this._snackBar.dismiss())
          }
        })
      })
    }
    else {
      this.postService.updatePost(postObj).subscribe(data=>{
        if(data.acknowledged)
        {
          let snackBarRef =this._snackBar.open('Successfully added','close' ,{duration:2*1000});
          snackBarRef.onAction().subscribe(()=>this._snackBar.dismiss())
        }
      })
    }
  }
}
