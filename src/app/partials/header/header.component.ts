import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Store } from '@ngrx/store';
import {
  getThemeStart,
} from '../../store/actions/theme.action'

import {
  getTheme
} from '../../store/selector/theme.selector'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  theme$!:Observable<any>;
  theme!:string;
  constructor(private store$: Store){}

  ngOnInit(): void {
    this.store$.dispatch(getThemeStart())
    this.theme$ = this.store$.select(getTheme);

    this.theme$.subscribe((theme) => {
      this.theme = theme;
    })
  }
}
