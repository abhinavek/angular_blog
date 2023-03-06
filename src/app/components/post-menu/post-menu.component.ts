import {Component, Input, OnInit} from '@angular/core';
import Post from "../../../std/classes/Post";
import {MatDialog} from "@angular/material/dialog";
import {PostDeleteComponent} from "../../posts/post-delete/post-delete.component";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrls: ['./post-menu.component.scss']
})
export class PostMenuComponent implements OnInit{
  @Input() post !: Post ;
  userId:string=''
  constructor(public dialog: MatDialog, private userService:UserService) {
  }
  ngOnInit() {
    this.userService.loginUser().subscribe(data=>this.userId = data?._id)
  }

  deletePost = () => {
    this.dialog.open(PostDeleteComponent, {
      data:{
        id:this.post._id,
      }
    });
  }
  hideDialog = () => {
    this.dialog.closeAll()
  }

}
