import { Component } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {

  constructor(config: NgbCarouselConfig) {
		config.interval = 5000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
	}
  
}
