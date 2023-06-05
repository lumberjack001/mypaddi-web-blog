import { Component } from '@angular/core';
import countrycodes from '../../../../assets/json/countrycodes.json';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  countries: { countryCode: string; value: string; country: string }[] =
    countrycodes;
}
