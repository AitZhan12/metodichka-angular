import {TopicsDto} from '../topics/topicsDto';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicsService} from '../../services/topics-service';

import {SimpleObject} from '../fileUpload/SimpleObject';
import {AuthenticationService} from '../../services/authentication.service';
import {Component, OnInit} from '@angular/core';

@Component({templateUrl: './create-topic.component.html'})
export class CreateTopicComponent implements OnInit {

  topic: TopicsDto;
  categories: SimpleObject[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicsService,
              private authService: AuthenticationService) {
    this.topic = new TopicsDto();
  }

  ngOnInit(): void {
    this.initTypes();
    this.authService.getRole();
  }
  onSubmit() {
    this.topicService.save(this.topic).subscribe(result => this.gotoListPage());
  }

  initTypes() {
    this.categories.push(new SimpleObject(1, 'Инжиниринг'));
    this.categories.push(new SimpleObject(2, 'Бағдарламалау'));
    this.categories.push(new SimpleObject(3, '3D модельдеу'));
    this.categories.push(new SimpleObject(4, 'Робототехника'));
  }

  gotoListPage() {
    this.router.navigate(['/addBook']);
  }


}
