import { Component, OnInit } from '@angular/core';
import { ExaminationScoreService } from './examination-score.service';

@Component({
  selector: 'app-examination-score',
  templateUrl: './examination-score.component.html',
})
export class ExaminationScoreComponent implements OnInit {
  displayedColumns: string[] = ['subjectName', 'score'];

  userId = localStorage.getItem('UserId')!;
  // userId = '10';

  dataSource = this.examinationScoreService.getScore(this.userId);

  constructor(private examinationScoreService: ExaminationScoreService) {}

  ngOnInit(): void {}
}
