import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../model/Post";
import {PostCreate} from "../../model/PostCreate";
import {Vote} from "../../model/Vote";

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
  findPostById(id : number):Observable<Post>{
    return this.http.get<Post>(`http://localhost:8080/posts/${id}`)
  }
  findVoteByAccount_IdAndPost_Id(accountId:number,postId:number):Observable<Post>{
    return this.http.get<Post>(`http://localhost:8080/votes/${accountId}/${postId}`)
  }
  findAllByBlog_Id(postId:number):Observable<Post[]>{
    return this.http.get<Post[]>(`http://localhost:8080/votes/${postId}`)
  }
  saveVote(vote:Vote):Observable<Vote>{
    return this.http.post<Vote>('http://localhost:8080/votes',vote)
  }
}
