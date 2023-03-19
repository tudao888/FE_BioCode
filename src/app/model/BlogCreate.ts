import {Account} from "./Account";

export class BlogCreate{
  title: string;
  contentBlog: string;
  image: string;
  account: Account;


  constructor( title: string, contentBlog: string, image: string, account: Account) {
    this.title = title;
    this.contentBlog = contentBlog;
    this.image = image;
    this.account = account;
  }
}
