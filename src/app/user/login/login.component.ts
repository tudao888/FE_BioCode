import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {AccountToken} from "../../model/AccountToken";
import {Account} from "../../model/Account";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {

  }

  accountCheck!: AccountToken
  account!: Account
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)

  })

  login() {
    this.accountService.login(this.loginForm.value).subscribe((data) => {
      this.accountCheck = data;
      this.checkLogin(this.accountCheck)
    }, (error) => {
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Login Fail!</h2>',
        'error'
      )
    })
  }

  checkLogin(accountToken: AccountToken) {
    this.accountService.setToken(accountToken.token);
    this.accountService.setAccountToken(accountToken);
    this.accountService.findById(accountToken.id).subscribe(res => {
        this.account = res;
        if (this.account != null) {
          Swal.fire(
            ' ',
            '<h2 style="color: green; font-size: 32px">Đăng nhập thành công!!!</h2>',
            'success'
          )
          for (let i = 0; i < accountToken?.roles.length; i++) {
            if (accountToken?.roles[i].id == 1) {
              this.router.navigate(["/admin"]);
            }
          }
          this.router.navigate(["/home"]);
        } else {
          Swal.fire(
            ' ',
            '<h2 style="color: red; font-size: 32px">The account has been banned</h2>',
            'error'
          )
          this.router.navigate(['/login']);
        }
      }
    )
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
