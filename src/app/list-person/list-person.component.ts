import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name : 'Nguyễn Quang Trường', age: 32},
    { name : 'Phan Thùy Linh', age: 30},
    { name : 'Nguyễn Linh Chi', age: 6}
  ];

  constructor() { }

  ngOnInit() {
  }

}
