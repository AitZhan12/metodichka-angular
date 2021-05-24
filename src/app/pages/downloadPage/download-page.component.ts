
import {TopicsDto} from '../topics/topicsDto';
import {TopicsService} from '../../services/topics-service';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownloadPageComponent implements OnInit {

  topicsDto: TopicsDto[];
  constructor(private topicService: TopicsService) {
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getModel().subscribe(data => {
      this.topicsDto = data;
    });
  }

  download(id: number) {
    this.topicService.downloadMd(id).subscribe(() => {
    });
  }

}
