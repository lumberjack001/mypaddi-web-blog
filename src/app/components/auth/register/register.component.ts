import { Component } from '@angular/core';
import countrycodes from '../../../../assets/json/countrycodes.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hideForm: boolean = false;
  countries: { countryCode: string; value: number; country: string }[] =
    countrycodes;

  previousPage() {
    this.hideForm = false;
  }
  nextPage() {
    this.hideForm = true;
  }
}

