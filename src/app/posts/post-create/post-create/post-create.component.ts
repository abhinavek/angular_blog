import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  newPost:string = ''
  enteredContent=''
  onAddPost(content:HTMLTextAreaElement){
    alert(content.value)
    this.newPost='New Post Added!'
  }
}
