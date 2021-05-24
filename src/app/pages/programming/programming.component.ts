
import {TopicsService} from '../../services/topics-service';
import {TopicsDto} from '../topics/topicsDto';

import {ModalProgrammingComponent} from '../modal/modal-programming.component';
import {AuthenticationService} from '../../services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  templateUrl: './programming.component.html'
})
export class ProgrammingComponent implements OnInit {

  topicsDto: TopicsDto[];
  constructor(private service: TopicsService,
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
    this.service.getProgramming().subscribe(data => {
      this.topicsDto = data;
    });
  }

  download(id: number) {
    this.service.downloadPr(id).subscribe(data => {
      const blob = new Blob([data], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
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

  downloadFile(data: any, type: string) {
    const blob: any = new Blob([data], {type: type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert('something went wrong');
    }
  }

}
