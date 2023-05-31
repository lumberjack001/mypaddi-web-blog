import { Component } from '@angular/core';

@Component({
  selector: 'app-period-checker',
  templateUrl: './period-checker.component.html',
  styleUrls: ['./period-checker.component.scss']
})
export class PeriodCheckerComponent {
  activeTab!: number;

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  getHeader(tabNumber: number): string {
    switch (tabNumber) {
      case 1:
        return 'Step 1';
      case 2:
        return 'Step 2';
      case 3:
        return 'Step 3';
      default:
        return '';    
    }
  }

  nextTab(){
    if (this.activeTab < 3) {
      this.activeTab++;
    }
  }

  prevTab() {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
  }

  ngOnInit() {
    this.activeTab = 1;
  }
}
