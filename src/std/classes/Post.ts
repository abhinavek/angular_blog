interface Post {
    _id?:string | ''
    id?:number
    title: string | ''
    content:string | ''
    image: string | ''
    author_id:string,
    author_first_name?:string,
    author_last_name?:string,
    author_avatar?:string,

  }

export default Post
