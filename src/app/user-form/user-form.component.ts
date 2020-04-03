import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = '';

  // showEvent(event) {
  //   //Show cac gia tri cua event ra log de biet trong do co nhuwng gia tri gi
  //   // console.log(event.target.value);
  //   this.name = event.target.value;
  // }

  isHighlight = true;

  evenStyle = { color: 'red'};
  oddStyle = { color: 'black'};

  
  changeHighlight(){
    this.isHighlight = this.name.length % 2 === 0;
    console.log(this.isHighlight);
    return this.isHighlight;
  }
  
  currentClass = {circle: !this.changeHighlight(), square: this.changeHighlight()}
}
