import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { TeeService } from '../services/tee.service';




export interface ScoreCard {
  holeNumber: number;
  blank?: string;
  score: number;
  yardage: number;
  hcp: number;
  par: number;
  overUnder?: number;
}

const ELEMENT_DATA: ScoreCard[] = [
  {holeNumber: 1, score: 3, yardage: 1.0079, hcp: 3, par: 4,},
  {holeNumber: 2,  score: 3, yardage: 4.0026, hcp: 3, par: 3,},
  {holeNumber: 3,  score: 3, yardage: 6.941, hcp: 3 , par: 4,},
  {holeNumber: 4,  score: 4, yardage: 9.0122, hcp: 3, par: 5,},
  {holeNumber: 5,  score: 5, yardage: 10.811, hcp: 3, par: 4,},
  {holeNumber: 6,  score: 3, yardage: 12.0107, hcp: 3, par: 3,},
  {holeNumber: 7,  score: 7, yardage: 14.0067, hcp: 3,par: 3,},
  {holeNumber: 8,  score: 6, yardage: 15.9994, hcp: 3,par: 3,},
  {holeNumber: 9,  score: 8, yardage: 18.9984, hcp: 3,par: 4,},
  {holeNumber: 10,  score: 5, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 11,  score: 5, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 12,  score: 4, yardage: 20.1797, hcp: 3,par: 2,},
  {holeNumber: 13,  score: 3, yardage: 20.1797, hcp: 3,par: 4,},
  {holeNumber: 14,  score: 6, yardage: 20.1797, hcp: 3,par: 3,},
  {holeNumber: 15,  score: 7, yardage: 20.1797, hcp: 3,par: 3,},
  {holeNumber: 16,  score: 8, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 17,  score: 7, yardage: 20.1797, hcp: 3,par: 4,},
  {holeNumber: 18,  score: 4, yardage: 20.1797, hcp: 3,par: 3,},
];



@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  displayedColumns: string[] = ['holeNumber', 'score', 'yardage', 'hcp', 'par',];
  displayedFooters: string[] = ['holeNumber', 'score',];
  dataSource = ELEMENT_DATA;

  activeCourse;
  activeTee;

  constructor(private http: HttpClient, private courseService: CoursesService, private teeService: TeeService) {}

  ngOnInit() {
    this.courseService.activeCourse.subscribe(activeCourse => {
      this.activeCourse = activeCourse;
    });
    this.teeService.activeTee.subscribe(activeTee => {
      this.activeTee = activeTee;
    });
  }
  getTotal() {
    return this.dataSource.map(t => t.score).reduce((acc, value) => acc + value, 0);
  }
}
