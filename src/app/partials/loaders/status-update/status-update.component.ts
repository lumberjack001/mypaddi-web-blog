import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.scss']
})
export class StatusUpdateComponent implements OnInit{

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.statusChange('success')
    // }, 5000);
  }
  statusChange = (status: string) => {
    const el = $('.circle-loader')
    const div = $('.circle-div')
    el.removeClass()
    el.addClass('circle-loader');
    el.addClass(status);
    if (status === 'failed') {
      div.css("background-color", "#FFEBEE");
    } else {
      div.css("background-color", "#F5FBF7");
    }
  }

  setLoad = () => {
    const el = $('.circle-loader')
    const div = $('.circle-div')
    el.removeClass()
    el.addClass('circle-loader');
    div.css("background-color", "#F5FBF7");
  }

}
