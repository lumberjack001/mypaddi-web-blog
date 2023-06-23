import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getThemeStart } from 'src/app/store/actions/theme.action';
import { getTheme } from 'src/app/store/selector/theme.selector';

@Component({
  selector: 'app-nav-icons',
  templateUrl: './nav-icons.component.html',
  styleUrls: ['./nav-icons.component.scss']
})
export class NavIconsComponent implements OnInit{
  activeRoute!:string;
  theme$!:Observable<any>;
  theme!:string;

  constructor(private router: Router, private store$: Store){

  }
  ngOnInit(): void {
    this.store$.dispatch(getThemeStart())
    this.theme$ = this.store$.select(getTheme);

    this.theme$.subscribe((theme) => {
      this.theme = theme;
    })

    if (this.router.url.startsWith('/blog')) {
      this.activeRoute = "blog"
    }

    if (this.router.url.startsWith('/chat')) {
      this.activeRoute = "chat"
    }

    if (this.router.url.startsWith('/audio')) {
      this.activeRoute = "audio"
    }
    
  }
}
