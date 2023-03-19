import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {Account} from "../../model/Account";
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../../service/blog/blog.service";
import {Blog} from "../../model/Blog";
import {BlogCreate} from "../../model/BlogCreate";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {


  constructor(private blogService: BlogService, private router: Router, private accountService: AccountService) {
  }

  formCreateBlog: any;
  account!: Account;

  blogCreate!: BlogCreate


  createBlog() {
    const blogCreate = new BlogCreate(
      this.formCreateBlog.value.title,
      this.formCreateBlog.value.contentBlog,
      this.formCreateBlog.value.image,
      this.account)
    this.blogService.createBlog(blogCreate).subscribe(
      (res) => {
        Swal.fire('Done!', 'Nice, Go to Blog right now', 'success');
        this.router.navigate(["/showBlog"]);
      }
    )
  }

  ngOnInit(): void {
    this.formCreateBlog = new FormGroup({
      title: new FormControl("", Validators.required),
      contentBlog: new FormControl("", Validators.required),
      image: new FormControl("", Validators.required),
    })
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe((data) => {
      this.account = data;
    })
  }
}
