import {Component, OnInit} from '@angular/core';
import {PostService} from "../service/post/post.service";
import {Post} from "../model/Post";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../service/account/account.service";
import {Vote} from "../model/Vote";
import {Account} from "../model/Account";
import Swal from "sweetalert2";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  constructor(private postService: PostService, private route: ActivatedRoute, private accountService: AccountService) {
  }

  checkVote: boolean = true;
  post!: Post;
  id!: number;
  quantityVote!: number;
  account!: Account;

  ngOnInit(): void {
    this.id = this.accountService.getAccountToken().id;
    this.accountService.findById(this.id).subscribe(res => this.account = res);
    this.postService.findAllByBlog_Id(this.route.snapshot.params['id']).subscribe(res => this.quantityVote = res.length)
    this.postService.findPostById(this.route.snapshot.params['id']).subscribe(res => {
      this.post = res;
      console.log(res)
    });
    this.postService.findVoteByAccount_IdAndPost_Id(this.id, this.route.snapshot.params['id']).subscribe(res => {
      if (res != null) {
        this.checkVote = false;
      }
    })
  }

  createVote() {
    const vote = new Vote(this.account, this.post)
    this.postService.saveVote(vote).subscribe(res => {
      Swal.fire('Done!', 'Voted', 'success');
      this.postService.findAllByBlog_Id(this.route.snapshot.params['id']).subscribe(res => {
        this.quantityVote = res.length;
        this.checkVote = false;

      })
    })
  }
}
