import { Component } from '@angular/core';

@Component({
  selector: 'app-period-checker',
  templateUrl: './period-checker.component.html',
  styleUrls: ['./period-checker.component.scss']
})
export class PeriodCheckerComponent {
  hideForm: boolean = false;

  previousPage() {
    this.hideForm = false;
  }
  nextPage() {
    this.hideForm = true;
  }
}
