
import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './informatics.component.html',
  styleUrls: ['./informatics.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))]),
    ])
  ]
})

export class InformaticsComponent implements OnInit {

  constructor() {
  }
  current = 0;
  img_list = [
    '../../../assets/imgs/1.png',
    '../../../assets/imgs/2.jpg',
    '../../../assets/imgs/5.png',
    '../../../assets/imgs/3.jpg',
    '../../../assets/imgs/7.jpg',
    '../../../assets/imgs/6.png',
  ];


  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }
}
