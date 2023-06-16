import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { getThemeStart } from 'src/app/store/actions/theme.action';
import { getTheme } from 'src/app/store/selector/theme.selector';


@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.scss']
})
export class StatusUpdateComponent implements OnInit{
  @Input() status!:string;
  theme$!:Observable<any>;
  theme!:string;

  constructor(private store$: Store){}

  ngOnInit(): void {
    this.store$.dispatch(getThemeStart())
    this.theme$ = this.store$.select(getTheme);

    this.theme$.subscribe((theme) => {
      this.theme = theme;
    })
    this.statusChange(this.status)
  }
  statusChange = (status: string) => {
    const el = $('.circle-loader')
    const div = $('.circle-div')
    el.removeClass()
    el.addClass('circle-loader');
    el.addClass(status);
    const successBg = this.theme === 'Light' ? '#F5FBF7' : 'transparent';
    const failedBg = this.theme === 'Light' ? '#FFEBEE' : 'transparent';

    if (status === 'failed') {
      div.css("background-color", failedBg);
    } else {
      div.css("background-color", successBg);
    }
  }

  setLoad = () => {
    const el = $('.circle-loader')
    const div = $('.circle-div')
    el.removeClass()
    el.addClass('circle-loader');
    const bgColor = this.theme === 'Light' ? '#F5FBF7' : 'transparent';
    div.css("background-color", bgColor);
  }

}
