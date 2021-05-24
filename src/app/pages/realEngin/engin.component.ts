
import {ModalProgrammingComponent} from '../modal/modal-programming.component';
import {TopicsService} from '../../services/topics-service';
import {TopicsDto} from '../topics/topicsDto';
import {AuthenticationService} from '../../services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: './engin.component.html'
})
export class EnginComponent implements OnInit {

  topicsDto: TopicsDto[];
  constructor(private topicService: TopicsService,
              private dialog: MatDialog,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.getTopics();
  }
  getRole(): boolean {
    return this.authService.getRole();
  }
  getTopics() {
    this.topicService.getEng().subscribe(data => {
      this.topicsDto = data;
    });
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
