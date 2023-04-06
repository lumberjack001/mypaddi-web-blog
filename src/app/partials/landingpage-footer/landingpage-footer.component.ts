import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage-footer',
  templateUrl: './landingpage-footer.component.html',
  styleUrls: ['./landingpage-footer.component.scss']
})
export class LandingpageFooterComponent implements OnInit {
  year!: any;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

}
