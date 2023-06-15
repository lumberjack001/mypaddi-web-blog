import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {
  getThemeStart,
} from '../../store/actions/theme.action'

import {
  getTheme
} from '../../store/selector/theme.selector'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-landingpage-navbar',
  templateUrl: './landingpage-navbar.component.html',
  styleUrls: ['./landingpage-navbar.component.scss']
})
export class LandingpageNavbarComponent implements OnInit {
  theme$!:Observable<any>;
  theme!:string;
  loggedIn!: boolean;
  routeURL!: string;

  constructor(private store$: Store, private router: Router) {
    this.routeURL = this.router.url;
  }

  ngOnInit(): void {
    this.store$.dispatch(getThemeStart())
    this.theme$ = this.store$.select(getTheme);

    this.theme$.subscribe((theme) => {
      this.theme = theme;
    })

    this.loggedIn = !!localStorage.getItem('accessToken');
  }

}
