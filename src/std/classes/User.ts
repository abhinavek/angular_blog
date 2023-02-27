export class UserInterface {
  _id: string | '' | undefined
  first_name: string | '' | undefined
  last_name: string | '' | undefined
  email?: string | undefined
  avatar?: string | '' | undefined
}
export class User implements UserInterface {
  avatar: string | "" | undefined;
  first_name: string | "" | undefined;
  _id: string | "" | undefined;
  email: string | undefined
  last_name: string | "" | undefined;
  constructor(user: User) {
    this._id = user?._id
    this.first_name=user?.first_name
    this.last_name=user?.last_name
    this.email=user?.email
  }
  getName = () => {
    return `${this.first_name} ${this.last_name}`
  }
  getUserId = ():string => {
    return <string>this._id
  }
}

