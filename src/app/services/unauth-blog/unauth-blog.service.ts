import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnauthBlogService {
  private BASE_URL = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getUnauthPosts(post_next = '', post_prev = '', per_page = 9){
    let query = `next=${post_next}&prev=${post_prev}`;
    return this.http.get(`${this.BASE_URL}/admin/unauth-blogs?per_page=${per_page}&${query}`)
  }

  getUnauthPost(slug: any){
    return this.http.get(`${this.BASE_URL}/admin/unauth-blog/${slug}`)
  }

  getUnauthBlogCategories(next = '', prev = '', per_page = 10){
    let query = `next=${next}&prev=${prev}`
    return this.http.get(`${this.BASE_URL}/admin/unauth-blogCat?per_page=${per_page}&${query}`)
  }

  getUnauthFeaturedPosts(){
    return this.http.get(`${this.BASE_URL}/admin/unauth-blogFt`)
  }

  getUnauthComments(slug: string){
    return this.http.get(`${this.BASE_URL}/admin/unauth-blog/comments/${slug}`)
  }

  getUnauthCommentReplies(id: string){
    return this.http.get(`${this.BASE_URL}/admin/unauth-blog/comments/${id}/replies`)
  }
}
