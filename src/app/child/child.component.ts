import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addForParent(){
    this.myClick.emit(true);
  }

  subForParent(){
    this.myClick.emit(false);
  }

}
