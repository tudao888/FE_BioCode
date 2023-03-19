import {Account} from "./Account";
import {Post} from "./Post";

export class Vote{
    account!:Account;
    post!:Post;

  constructor(account: Account, post: Post) {
    this.account = account;
    this.post = post;
  }
}
