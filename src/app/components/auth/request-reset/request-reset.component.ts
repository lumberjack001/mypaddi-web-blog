import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//----ngrx
import { requestResetStart } from '../../../store/actions/auth.action';
import { getLoading } from '../../../Shared/store/loader.selector';
import { setLoadingSpinner } from '../../../Shared/store/loader.action';
import { getResetRequestData } from 'src/app/store/selector/auth.selector';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})

export class RequestResetComponent implements OnInit{
  statusLoading = false;
  isLoading$!: Observable<boolean>;
  requestResetData$!: Observable<any>
  requestResetSuccess = false


  constructor(private store$: Store){}

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(getLoading);
    this.requestResetData$ = this.store$.select(getResetRequestData)
  }

  requestResetForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    code: new FormControl('code'),
  });

  requestPasswordReset(): void {
    if (this.requestResetForm.invalid) {
      return;
    }
    this.store$.dispatch(setLoadingSpinner({ status: true }));
    this.store$.dispatch(
      requestResetStart({ params: this.requestResetForm.value.email })
    );
    this.requestResetData$.subscribe((data) => {
      if (data && data.status) {
        this.requestResetSuccess = true;
      }
    })
    
  }

  resendEmail():void {
    this.requestResetSuccess = false;
  }

  

}
