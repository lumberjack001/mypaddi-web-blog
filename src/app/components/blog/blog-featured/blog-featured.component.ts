import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { getFeaturedPostsStart, setFeaturedPostsLoader } from 'src/app/store/actions/blog.action';
import { getFeaturedPosts, isFeaturedPostsLoading } from 'src/app/store/selector/blog.selector';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-featured',
  templateUrl: './blog-featured.component.html',
  styleUrls: ['./blog-featured.component.scss']
})
export class BlogFeaturedComponent implements OnInit{
  featuredPosts!: any[];
  featuredPosts$!: Observable<any>;
  loading!: boolean;
  loading$!: Observable<boolean>;

  constructor(private store$: Store, private router: Router, private blogService: BlogService){}
  ngOnInit(): void {
    this.store$.dispatch(setFeaturedPostsLoader({ status: true }))
    this.store$.dispatch(getFeaturedPostsStart());
    this.featuredPosts$ = this.store$.select(getFeaturedPosts);
    this.featuredPosts$.subscribe((data) => {
      this.featuredPosts = data;
    });
    this.loading$ = this.store$.select(isFeaturedPostsLoading);
    this.loading$.subscribe((data) => {
      this.loading = data;
    })
  }

  truncate(text: any, limit: number, content: any) {
    return this.blogService.truncate(text, limit, content);
  }
}
