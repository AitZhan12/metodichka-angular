import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StemDto} from './stemDto';
import {StemServiceService} from '../../services/stem-service.service';


@Component({
  templateUrl: './engineering.component.html'
})
export class EngineeringComponent implements OnInit {

  description: string;
  constructor(private route: ActivatedRoute,
              private service: StemServiceService) {

  }
  ngOnInit() {
    this.service.getData()
      .subscribe(data => {
        this.description = data;
      });
  }

}
