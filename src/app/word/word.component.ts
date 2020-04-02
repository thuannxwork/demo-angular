import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  forgot = true;

  toggleForgot() {
    this.forgot = !this.forgot;
  }

  en = 'Hello word!';
  vn = 'Chao xìn';
  imageUrl = 'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-01/1585755059-606-nhat-anh-6-1585726701-width600height778.jpg';
  imageUrl2 = 'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-01/1585755059-420-nhat-anh-8-1585726639-width600height858.jpg';
}
