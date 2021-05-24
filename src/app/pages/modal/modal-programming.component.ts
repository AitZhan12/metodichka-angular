
import {TopicsService} from '../../services/topics-service';
import {TopicsDto} from '../topics/topicsDto';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  templateUrl: './modal-programming.component.html',
  styleUrls: ['./modal-programming.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalProgrammingComponent implements OnInit {

  topicsDto: TopicsDto[];
  thesis: string;
  constructor(public dialogRef: MatDialogRef<ModalProgrammingComponent>,
              private topicService: TopicsService,
              private cdRef: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
    if (this.data.category === 2) {
      this.getThesisProg();
      this.getTopicsProg();
    } else if (this.data.category === 1) {
      this.getThesisEng();
      this.getTopicsEng();
    } else if (this.data.category === 3) {
      this.getThesisModeling();
      this.getTopicsModeling();
    } else {
      this.getThesisRobot();
      this.getTopicsRobot();
    }
  }

  getTopicsProg() {
    this.topicService.getProgramming().subscribe(data => {
      this.topicsDto = data;
    });
  }

  getTopicsEng() {
    this.topicService.getEng().subscribe(data => {
      this.topicsDto = data;
    });
  }

  getTopicsModeling() {
    this.topicService.getModel().subscribe(data => {
      this.topicsDto = data;
    });
  }

  getTopicsRobot() {
    this.topicService.getRobot().subscribe(data => {
      this.topicsDto = data;
    });
  }

  getThesisProg() {
    this.topicService.getThesisProg(this.data.id).subscribe(data => {
      this.thesis = data;
    });
  }

  getThesisEng() {
    this.topicService.getThesisEng(this.data.id).subscribe(data => {
      this.thesis = data;
    });
  }

  getThesisRobot() {
    this.topicService.getThesisRobot(this.data.id).subscribe(data => {
      this.thesis = data;
    });
  }

  getThesisModeling() {
    this.topicService.getThesisModel(this.data.id).subscribe(data => {
      this.thesis = data;
    });
  }

  downloadPdf(id: number) {
    this.topicService.download(this.data.category, id).subscribe(data => {
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  downloadPptx(id: number) {
    this.topicService.downloadPptx(this.data.category, id).subscribe(data => {
      const blob = new Blob([data], {type: 'application/pptx'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
