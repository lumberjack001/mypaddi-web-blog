import { Component,  OnInit } from '@angular/core';
import countrycodes from '../../../../assets/json/countrycodes.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { signupStart } from 'src/app/store/actions/auth.action';
import { getLoading } from '../../../Shared/store/loader.selector';
import { setLoadingSpinner } from '../../../Shared/store/loader.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  isLoading$!: Observable<boolean>;
  firstSectionActive: boolean = true;
  countries: { countryCode: string; value: string; country: string }[] =
    countrycodes;
  viewPassword = false;
  submitted = false;
  
  
  constructor(private store$: Store) {}

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    country_code: new FormControl('+234', [Validators.required]), 
    phone_number: new FormControl('', [Validators.required]),
    policyAcceptance: new FormControl('', [Validators.required]),
    code: new FormControl('code'),
  });

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(getLoading);
  }
  register(): void{
    this.submitted = true
    if (this.registerFormControl['username'].hasError('required') ||
    this.registerFormControl['password'].hasError('required') ||
    this.registerFormControl['email'].hasError('required') ||
    this.registerFormControl['email'].invalid) {
      this.firstSectionActive = true;
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      return;
    }

    if (this.registerFormControl['date_of_birth'].hasError('required') ||
    this.registerFormControl['phone_number'].hasError('required') || 
    this.registerFormControl['policyAcceptance'].hasError('required') ||
    !this.registerFormControl['policyAcceptance']?.value ) {
      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      return;
    }

    const country_code = this.registerForm.value.country_code.replace('+', '')
    const data = {
      ...this.registerForm.value,
      phone_number: Number(country_code + this.registerForm.value.phone_number)
    }
    this.store$.dispatch(setLoadingSpinner({ status: true }));
    this.store$.dispatch(signupStart({ params: data }));
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  previousPage() {
    this.firstSectionActive = true;
  }
  nextPage() {
    this.firstSectionActive = false;
  }

  view_password() {
    this.viewPassword = true;
  }

  hide_password() {
    this.viewPassword = false;
  }
  
}

