import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private BASE_URL = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getPosts(next = '', prev = '', per_page = 9) {
    let query = `next=${next}&prev=${prev}`;
    return this.http.get(
      `${this.BASE_URL}/blogs?per_page=${per_page}&${query}`
    );
  }

  getSortBlogs( type:any, blog_next='', blog_prev = '', per_page = 9) {
    return this.http.get(`${this.BASE_URL}/blogs/sort?type=${type}&per_page=${per_page}&blog_next=${blog_next}&blog_prev=${blog_prev}`);
  }

  getBlogsByCategory( blogCateId: any, next='', prev='', per_page = 9) {
    return this.http.get(`${this.BASE_URL}/blogs/list?category_id=${blogCateId}&per_page=${per_page}&next=${next}&prev=${prev}`)
  }

  getPopularBlogs() {
    return this.http.get(`${this.BASE_URL}/blogs/popular`)
  }
  
  getFeaturedBlogs() {
    return this.http.get(`${this.BASE_URL}/blogs/featured`)
    
  }

  getBlogPost(slug:any){
    return this.http.get(`${this.BASE_URL}/blogs/${slug}`);
  }

  postLike(id: any){
    return this.http.post(`${this.BASE_URL}/blogs/${id}/like`, null);
  }

  postReadCount(id: any){
    return this.http.post(`${this.BASE_URL}/blogs/read-count/${id}`, null);
  }

  postComment(slug: any, payload: any){
    return this.http.post(`${this.BASE_URL}/blog-comments/${slug}`, {content: payload});
  }

  postCommentLike(id: any){
    return this.http.post(`${this.BASE_URL}/blog-comments/${id}/like`, null);
  }

  postCommentReply(id: any, payload: any){
    return this.http.post(`${this.BASE_URL}/blog-comments/${id}/reply`, {content: payload});
  }

  getComments(slug:any){
    return this.http.get(`${this.BASE_URL}/blog-comments/${slug}`);
  }

  getComment(id:any){
    return this.http.get(`${this.BASE_URL}/blog-comments/comment/${id}`);
  }

  getReplies(id:any){
    return this.http.get(`${this.BASE_URL}/blog-comments/comment/${id}/replies`);
  }
  
  getCategories(next = '', prev = '', per_page = 10) {
    let query = `next=${next}&prev=${prev}`;
    return this.http.get(
      `${this.BASE_URL}/blog-categories?per_page=${per_page}&${query}`
    );
  }

  setSavedBlog(data: any){
    localStorage.setItem('savedBlogs',JSON.stringify(data))
  }

  getSavedBlogs(){
    const result = localStorage.getItem('savedBlogs')
    return JSON.parse("" + result)
    
  }
}
