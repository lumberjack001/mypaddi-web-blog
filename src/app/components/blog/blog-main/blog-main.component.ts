import { Component, OnInit } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { BlogService } from 'src/app/services/blog/blog.service';

import { getPosts, getPostsCursor, getPostsByCategory, 
  isScrollingLoading, getPostsByCategoryCursor, isBlogLoading } from 'src/app/store/selector/blog.selector';

import { getPostsStart, getPostsByCategoryStart, setScrollingLoader, 
  setBlogPostLoader } from 'src/app/store/actions/blog.action';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss']
})
export class BlogMainComponent implements OnInit{
  constructor(private blogService: BlogService, private store$: Store,
    private toastr: ToastrService){}

  categories = [{id: 'saved', category_name: 'Saved Blogs'}]
  categoryMode!: boolean;
  categoryId!: any
  categoryCursor$!: Observable<any>
  categoryCursor!: any


  posts!: any[];
  posts$!: Observable<any>;
  isBlogLoading$!: Observable<boolean>;
  isBlogLoading!: boolean;
  cursor$!: Observable<any>;
  cursor!: any;
  
  isScrollLoading$!: Observable<boolean>
  isScrollLoading!: boolean;
  allowInfiniteScroll!: boolean;
  scrollDisabled: boolean = false;
  throttle = 2000;
  distance = 1;
  scrollUpDistance = 1;

  noSavedPosts: boolean = false;
  savedPosts!: any[];

  moment: any = moment;

  ngOnInit(): void {
    this.blogService.getCategories().pipe(
      map((res: any) => {
          return res.data.results
      })).subscribe((res) => {
        this.categories = [...this.categories, ...res]
      })

      this.store$.dispatch(getPostsStart({postAfter: '', postBefore:'', perPage: 9}))
      this.store$.dispatch(setBlogPostLoader({ status: true }));
  
      this.posts$ = this.store$.select(getPosts);
      this.isBlogLoading$ = this.store$.select(isBlogLoading);
      this.cursor$ = this.store$.select(getPostsCursor)

      this.isBlogLoading$.subscribe((data) => {
        this.isBlogLoading = data
      })

      this.posts$.subscribe((data) => {
        if (data) {
          this.posts = data
        }
      });

      this.cursor$.subscribe((data) => {
        this.cursor = data
      });
      this.savedPosts = this.blogService.getSavedBlogs()
    
  }

  onScroll() {
    this.scrollDisabled = true
    this.isScrollLoading$ = this.store$.select(isScrollingLoading);
    if (this.categoryMode && this.categoryCursor && this.categoryCursor.hasNext) {
      try {
        this.store$.dispatch(setScrollingLoader({ status: true }));
        this.blogService.getBlogsByCategory(this.categoryId, this.categoryCursor.after, '', 9)
        .subscribe((data: any) => {
          if (data) {
          this.store$.dispatch(setScrollingLoader({ status: false }));
          const blogsByCategory = data.data.results
          const blogCategoryCursor = data.data.cursor
          const newPosts = [...this.posts, ...blogsByCategory]
          const newCursor = blogCategoryCursor

          if (this.posts !== newPosts && this.categoryCursor !== newCursor) {
            this.posts = newPosts
            this.categoryCursor = newCursor
            this.scrollDisabled = false
          }
          }
          
        })
      } catch (error) {
        throwError(error)
      }
    }
    else if (this.cursor && this.cursor.hasNext) {
      try {
          this.store$.dispatch(setScrollingLoader({ status: true }));
          this.blogService.getPosts(this.cursor.after, '', 9).subscribe((data: any) => {
          this.store$.dispatch(setScrollingLoader({ status: false }));
          const blogs = data.data.results
          const blogCursor = data.data.cursor
          this.posts = [...this.posts, ...blogs]
          this.cursor = blogCursor
          this.scrollDisabled = false
        })
      } catch (error) {
        throwError(error)
      }
    }
    else {
      this.scrollDisabled = false
    }
  }

  getCategorySort(id: any) {
    this.categoryId = id
    this.noSavedPosts = false;
    this.posts = []
    this.cursor = null
    this.categoryCursor = null
    if (id === 'all') {
      this.categoryMode = false;
      this.store$.dispatch(getPostsStart({postAfter: '', postBefore:'', perPage: 9}))
      this.store$.dispatch(setBlogPostLoader({ status: true }));
      this.posts$ = this.store$.select(getPosts)
      this.posts$.subscribe((data) => {
        if (data) {
          this.posts = data;
        }
        this.cursor$ = this.store$.select(getPostsCursor)
        this.cursor$.subscribe((data) => {
          this.cursor = data
        });
      });
    } else if (id === 'saved') {
      this.categoryMode = false;
      this.getSavedBlogs()

    } else {
      this.categoryMode = true;
      this.store$.dispatch(
        getPostsByCategoryStart({
          cateId: id,
          postAfter: '',
          postBefore: '',
        })
      );
      this.store$.dispatch(setBlogPostLoader({ status: true }));
      this.posts$ = this.store$.select(getPostsByCategory);
      this.posts$.subscribe((data) => {
        if (data) {
          this.posts = data;
        }
        
      });
      this.categoryCursor$ = this.store$.select(getPostsByCategoryCursor)
        this.categoryCursor$.subscribe((data) => {
          this.categoryCursor = data
        });
    }
  }

  getSavedBlogs() {
    if (
      !this.blogService.getSavedBlogs() ||
      this.blogService.getSavedBlogs().length === 0
    ) {
      this.noSavedPosts = true;
    } else {
      this.noSavedPosts = false;
    }
    this.posts = this.blogService.getSavedBlogs()
    this.cursor = null;
    this.categoryCursor = null;
  }

  checkSaved(blog: any) {
    return this.blogService.checkSaved(blog)
  }

  loadSavedBlogs() {
    this.noSavedPosts = false;
    this.savedPosts = this.blogService.getSavedBlogs()
    if (this.categoryId === 'saved') {
      if (!this.savedPosts || this.savedPosts.length === 0) {
        this.noSavedPosts = true;
      }
      this.posts = this.savedPosts;
    }
  }

  saveBlog(blog: any) {
    const storageData = this.blogService.getSavedBlogs()
    let data: any;

    if (storageData === null) {
      data = []
    } else {
      data = [...storageData]
    }

    data.push(blog)

    this.blogService.setSavedBlogs(data)
    this.toastr.success("Blog Post Saved!")
    this.savedPosts = this.blogService.getSavedBlogs()
  }

  unsaveBlog(blog: any) {
    const data = this.savedPosts?.filter((x) => x.id !== blog.id);
    this.blogService.setSavedBlogs(data)
    this.toastr.info("Blog Post Unsaved!")
    this.loadSavedBlogs()
  }

  truncate(text: any, limit: number, content: any) {
    return this.blogService.truncate(text, limit, content);
  }

}
