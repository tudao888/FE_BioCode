import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../model/Blog";
import {HttpClient} from "@angular/common/http";
import {PostCreate} from "../../model/PostCreate";
import {Post} from "../../model/Post";
import {BlogCreate} from "../../model/BlogCreate";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>("http://localhost:8080/blogs");
  }

  createBlog(blog: BlogCreate): Observable<Blog> {
    // @ts-ignore
    return this.http.post<Blog>("http://localhost:8080/blogs", blog);
  }
}
