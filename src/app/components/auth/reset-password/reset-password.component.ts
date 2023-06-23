import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { resetPasswordStart } from 'src/app/store/actions/auth.action';
import { getResetPasswordData } from 'src/app/store/selector/auth.selector';
import { getLoading } from '../../../Shared/store/loader.selector';
import { setLoadingSpinner } from '../../../Shared/store/loader.action';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
  viewPassword = false;
  viewConfirmPassword = false;
  passwordMatchError = false;
  resetPasswordSuccess = false;
  resetPasswordData$!: Observable<any>
  isLoading$!: Observable<boolean>;

  constructor(private store$: Store){}

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(getLoading);
    this.resetPasswordData$ = this.store$.select(getResetPasswordData);
  }

  resetPasswordForm: FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    if(this.resetPasswordForm.value.password !== 
      this.resetPasswordForm.value.confirmPassword) {
        this.passwordMatchError = true;
        setTimeout(() => {
          this.passwordMatchError = false;
        }, 3000)

        return;
      }
      
      this.store$.dispatch(setLoadingSpinner({ status: true }));
      this.store$.dispatch(resetPasswordStart({ params: this.resetPasswordForm.value }));

      this.resetPasswordData$.subscribe((data) => {
        if (data && data.status) {
          this.resetPasswordSuccess = true;
        }
      })
  }

  view_password() {
    this.viewPassword = true;
  }
  hide_password() {
    this.viewPassword = false;
  }

  view_confirm_password() {
    this.viewConfirmPassword = true;
  }
  hide_confirm_password() {
    this.viewConfirmPassword = false;
  }

}
