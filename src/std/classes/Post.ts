interface Post {
    id?:number
    title: string | ''
    content:string | ''
    image: string | ''
    authorId:number | 0 | undefined
  }

export default Post
