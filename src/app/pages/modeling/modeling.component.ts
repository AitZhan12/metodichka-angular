import {Component, OnInit} from '@angular/core';
import {TopicsService} from '../../services/topics-service';
import {TopicsDto} from '../topics/topicsDto';
import {ModalProgrammingComponent} from '../modal/modal-programming.component';
import {MatDialog} from '@angular/material';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  templateUrl: './modeling.component.html'
})
export class ModelingComponent implements OnInit {

  topicsDto: TopicsDto[];
  constructor(private topicService: TopicsService,
              private dialog: MatDialog,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getRole(): boolean {
    return this.authService.getRole();
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

  openModal(topic: any) {
    const dialogRef = this.dialog.open(ModalProgrammingComponent, {
      data: topic,
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res != null) {
        this.getTopics();
      }
    });
  }
}
