import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../../model/Account";
import {AccountToken} from "../../model/AccountToken";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:8080/register', account)
  }

  login(account: any): Observable<AccountToken> {
    return this.http.post<AccountToken>("http://localhost:8080/login", account)
  }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/accounts/${id}`)
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem("token")
  }


  setAccountToken(accountToken: AccountToken) {
    localStorage.setItem("accountToken", JSON.stringify(accountToken))
  }

  getAccountToken() {
    // @ts-ignore - nghĩa là không su dụng cú pháp của TS
    return JSON.parse(localStorage.getItem("accountToken"))
  }
}
