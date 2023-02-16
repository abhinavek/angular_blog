export class UserInterface {
  id: number | 0 | undefined
  first_name: string | '' | undefined
  last_name: string | '' | undefined
  avatar: string | '' | undefined
}
export class User implements UserInterface {
  avatar: string | "" | undefined;
  first_name: string | "" | undefined;
  id: number | 0 | undefined;
  last_name: string | "" | undefined;

  getName = () => {
    return `${this.first_name} ${this.last_name}`
  }
}

