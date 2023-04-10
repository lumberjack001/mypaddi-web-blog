import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {

		config.interval = 5000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
	}


  ngOnInit(): void {
  }
}




