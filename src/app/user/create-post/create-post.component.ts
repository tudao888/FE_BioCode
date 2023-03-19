import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {Router} from "@angular/router";
import {PostService} from "../../service/post/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../model/Post";
import Swal from "sweetalert2";
import {PostCreate} from "../../model/PostCreate";
import {Account} from "../../model/Account";
import {Observable} from "rxjs";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  constructor(private postService: PostService, private router: Router, private accountService: AccountService) {
  }

  formCreatePost: any;
  account!: Account;
  today: any;


  createPost() {
    this.today = new Date().toISOString().split('T', 1)[0];
    const postCreate = new PostCreate(
      this.formCreatePost.value.title,
      this.formCreatePost.value.contentPost,
      this.formCreatePost.value.image,
      this.formCreatePost.value.startAt,
      this.formCreatePost.value.endAt,
      this.today,
      this.formCreatePost.value.address,
      this.formCreatePost.value.maxVote,
      1,
      this.account)
    this.postService.createPost(postCreate).subscribe(
      (res) => {
        Swal.fire('Done!', 'Your Post sent to accept', 'success');
        this.router.navigate(["/home"]);
      }
    )
  }

  ngOnInit(): void {
    this.formCreatePost = new FormGroup({
      title: new FormControl("", Validators.required),
      contentPost: new FormControl("", Validators.required),
      image: new FormControl("", Validators.required),
      startAt: new FormControl("", Validators.required),
      endAt: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      maxVote: new FormControl("", Validators.required),
      status: new FormControl("1", Validators.required),
      dateOfPost: new FormControl("", Validators.required)
    })
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe((data) => {
      this.account = data;
    })
  }
}
