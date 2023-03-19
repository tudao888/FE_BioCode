import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../service/blog/blog.service";
import {Blog} from "../../model/Blog";

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit{
  listBlog: Blog[] = [];

  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getAllBlog().subscribe((data) => {
      this.listBlog = data;
      console.log(data);
    })
  }

}
