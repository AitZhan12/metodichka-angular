import {Component, OnInit} from '@angular/core';
import {TopicsService} from '../../services/topics-service';
import {ModalProgrammingComponent} from '../modal/modal-programming.component';
import {TopicsDto} from '../topics/topicsDto';
import {MatDialog} from '@angular/material';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  templateUrl: './robotics.component.html'
})
export class RoboticsComponent implements OnInit {

  isAdmin: boolean;
  topicsDto: TopicsDto[];
  constructor(private topicService: TopicsService,
              private dialog: MatDialog,
              private authService: AuthenticationService) {
  }
  ngOnInit() {
    this.getTopics();
    this.getRole();
  }

  getTopics() {
    this.topicService.getRobot().subscribe(data => {
      this.topicsDto = data;
    });
  }

  getRole(): boolean {
    return this.authService.getRole();
  }
  download(id: number) {
    this.topicService.downloadRo(id).subscribe(() => {
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
