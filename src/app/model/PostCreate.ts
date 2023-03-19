import {Account} from "./Account";
import {FormControl, ɵValue} from "@angular/forms";
import {Observable} from "rxjs";

export class PostCreate {
  title!: string;
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


  constructor(title: string, contentPost: string, image: string, startAt: string, endAt: string, dateOfPost: string, address: string, maxVote: number, status: number, account: Account) {
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
