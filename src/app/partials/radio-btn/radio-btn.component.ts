import { Component, ElementRef, EventEmitter, Input, Output, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent {
  @ViewChild('radio') radio!: ElementRef;
  @Input() name!: string;

  @Output() radioEvent = new EventEmitter<any> ();

  radioChange(){
    this.radioEvent.emit(this.radio.nativeElement.checked)
    return(this.radio.nativeElement.checked)
  }
}
