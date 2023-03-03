import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostsService} from "../../../services/posts.service";
import {data} from "autoprefixer";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})

export class PostDeleteComponent {
  constructor(public dialogRef: MatDialogRef<PostDeleteComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private postService:PostsService,  private _snackBar: MatSnackBar) {}

  deletePost = ()=> {
    this.postService.deletePost(this.data.id).subscribe(data=>{
      if(data.acknowledged)
      {
        this.postService.getUpdatedPosts()
        let snackBarRef =this._snackBar.open('Successfully deleted','close' ,{duration:2*1000});
        snackBarRef.onAction().subscribe(()=>this._snackBar.dismiss())
        this.dialogRef.close()
      }
    })
  }
}
