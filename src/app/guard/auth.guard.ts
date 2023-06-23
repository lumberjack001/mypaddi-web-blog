import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!!localStorage.getItem('accessToken')) {
        return true;
      }
  
      // if (state.url === '/blog')
      //   this.router.navigate(['/unauth-blog']).then();
      // else
      //   this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }}).then();

      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }}).then();
      return false;
  }
  
}
