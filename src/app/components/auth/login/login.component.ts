import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//----ngrx
import { loginStart } from '../../../store/actions/auth.action';
import { getLoading } from '../../../Shared/store/loader.selector';
import { setLoadingSpinner } from '../../../Shared/store/loader.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  viewPassword = false;
  submitted = false;

  constructor(private store$: Store) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    code: new FormControl('code'),
  });

  login(): void {
    this.submitted = true;
    if (this.loginFormControl['username'].hasError('required') ||
    this.loginFormControl['password'].hasError('required')) {
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      return;
    }
    this.store$.dispatch(setLoadingSpinner({ status: true }));
    this.store$.dispatch(loginStart({ params: this.loginForm.value }));
  }

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(getLoading);
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  view_password() {
    this.viewPassword = true;
  }

  hide_password() {
    this.viewPassword = false;
  }
}
