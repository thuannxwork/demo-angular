import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = 0;
  changeValue(isAdd: boolean) {
    this.value = isAdd ? (this.value + 1) : (this.value - 1);
  }

}
