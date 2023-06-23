import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent {
  @Output () categoryEvent = new EventEmitter<any>();
  @Input() categories!:any;
  categoryId!: any;

  showChecked(checked: any, id: any){
    if(checked){
      this.categoryId = id
    }
  }

  submit(){
    this.categoryEvent.emit(this.categoryId)
  }
}
