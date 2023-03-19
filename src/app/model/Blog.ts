import {Account} from "./Account";

export class Blog{
  id: number;
  title: string;
  contentBlog: string;
  image: string;
  account: Account;


  constructor(id: number, title: string, contentBlog: string, image: string, account: Account) {
    this.id = id;
    this.title = title;
    this.contentBlog = contentBlog;
    this.image = image;
    this.account = account;
  }
}
