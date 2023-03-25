import { Component } from '@angular/core';
import countrycodes from '../../../../assets/json/countrycodes.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide: boolean = false;
  countries: { countryCode: string; value: number; country: string }[] =
    countrycodes;

  isHidden() {
    this.hide = false;
  }
  isShown() {
    this.hide = true;
  }
}

