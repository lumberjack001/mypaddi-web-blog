import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }
}
