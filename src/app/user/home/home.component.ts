import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {Post} from "../../model/Post";
import {PostService} from "../../service/post/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account: any

  listPost: Post[] = [];

  constructor(private accountService: AccountService, private router: Router, private postService: PostService) {
  }
  ngOnInit(): void {
    this.getAllPost();
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
      this.account = res;
      console.log(this.account)
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  getAllPost() {
    this.postService.getAllPost().subscribe((data) => {
      this.listPost = data;
      console.log(data);
    })
  }

  checkLogin() {
    if (this.accountService.getAccountToken() != null) {
      return;
    }
    else {
      alert("Cần đăng nhập để xem chi tiết")
    }
  }

}
