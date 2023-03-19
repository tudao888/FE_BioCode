import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {HomeComponent} from "./user/home/home.component";
import {CreatePostComponent} from "./user/create-post/create-post.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {ShowBlogComponent} from "./user/show-blog/show-blog.component";
import {CreateBlogComponent} from "./user/create-blog/create-blog.component";


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent},
  {path:"createPost", component: CreatePostComponent},
  {path:"event/:id", component: EventDetailComponent},
  {path:"showBlog", component: ShowBlogComponent},
  {path:"createBlog", component: CreateBlogComponent},
  // {path:"", component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
