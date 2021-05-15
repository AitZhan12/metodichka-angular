import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './engineering.component.html'
})
export class EngineeringComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
  }

}
