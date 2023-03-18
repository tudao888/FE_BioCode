import {Account} from "./Account";

export class Post {
  id: number;
  title: string;
   contentPost: string;
   image: string;
   startAt: string;
   endAt: string;
   dateOfPost: string;
   address: string;
   maxVote: number;
   status: number;
  // 1: Chờ duyệt
  // 2: Đã duyệt
  // 3: Đã kết thúc

 account: Account;


  constructor(id: number, title: string, contentPost: string, image: string, startAt: string, endAt: string, dateOfPost: string, address: string, maxVote: number, status: number, account: Account) {
    this.id = id;
    this.title = title;
    this.contentPost = contentPost;
    this.image = image;
    this.startAt = startAt;
    this.endAt = endAt;
    this.dateOfPost = dateOfPost;
    this.address = address;
    this.maxVote = maxVote;
    this.status = status;
    this.account = account;
  }
}
