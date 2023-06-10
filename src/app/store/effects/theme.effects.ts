import { Injectable } from '@angular/core';
// import { EMPTY, Observable, throwError } from 'rxjs';
// import { Action, Store } from '@ngrx/store';
import {  map, } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThemeService } from 'src/app/services/theme/theme.service';

import {
  getThemeStart,
  getThemeSuccess,
  toggleThemeStart,
  toggleThemeSuccess,
  setDarkThemeStart,
  setDarkThemeSuccess
} from '../actions/theme.action';

@Injectable()
export class ThemeEffects {
  constructor(
    private actions$: Actions,
    private themeService: ThemeService,
  ) {}



  getTheme$ = createEffect(() => this.actions$.pipe(
    ofType(getThemeStart),
    map(() => {
      const theme = this.themeService.getTheme();
      return getThemeSuccess({ theme });
    })
  ));


  toggleTheme$ = createEffect(() => this.actions$.pipe(
    ofType(toggleThemeStart),
    map(() => {
      this.themeService.toggleTheme();
      return toggleThemeSuccess();
    })
  ));

  setDarkTheme$ = createEffect(() => this.actions$.pipe(
    ofType(setDarkThemeStart),
    map(() => {
      this.themeService.addDarkTheme();
      return setDarkThemeSuccess();
    })
  ));
  
}
