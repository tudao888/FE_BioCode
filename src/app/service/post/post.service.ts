import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../model/Post";
import {PostCreate} from "../../model/PostCreate";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/posts`);
  }

  createPost(post: PostCreate): Observable<Post> {
    // @ts-ignore
    return this.http.post<Post>("http://localhost:8080/posts", post);
  }
}
