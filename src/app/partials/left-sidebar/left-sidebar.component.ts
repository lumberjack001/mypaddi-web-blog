import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {
  getThemeStart,
  toggleThemeStart
} from '../../store/actions/theme.action'

import {
  getTheme
} from '../../store/selector/theme.selector'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  theme$!:Observable<any>;
  theme!:string;
  constructor(private store$: Store, private auth: AuthService,
    private router: Router){}

  ngOnInit(): void {
    this.store$.dispatch(getThemeStart())
    this.theme$ = this.store$.select(getTheme);

    this.theme$.subscribe((theme) => {
      this.theme = theme;
    })
  }

  toggleTheme(): void {
    this.theme === 'Light' ? this.theme = 'Dark' : this.theme = 'Light';
    this.store$.dispatch(toggleThemeStart())
    this.store$.dispatch(getThemeStart());
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/']);
  }
}
