import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.scss']
})
export class LearnPipeComponent implements OnInit {

  currentDate = new Date();


  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  constructor() { }

  ngOnInit() {
  }

}
