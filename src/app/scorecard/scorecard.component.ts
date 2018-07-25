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
  totalScore?: number;
}

const ELEMENT_DATA: ScoreCard[] = [
  {holeNumber: 1, blank: '', score: 3, yardage: 1.0079, hcp: 3, par: 4,},
  {holeNumber: 2, blank:'', score: 3, yardage: 4.0026, hcp: 3, par: 3,},
  {holeNumber: 3, blank:'', score: 3, yardage: 6.941, hcp: 3 , par: 4,},
  {holeNumber: 4, blank:'', score: 4, yardage: 9.0122, hcp: 3, par: 5,},
  {holeNumber: 5, blank:'', score: 5, yardage: 10.811, hcp: 3, par: 4,},
  {holeNumber: 6, blank:'', score: 3, yardage: 12.0107, hcp: 3, par: 3,},
  {holeNumber: 7, blank:'', score: 7, yardage: 14.0067, hcp: 3,par: 3,},
  {holeNumber: 8, blank:'', score: 6, yardage: 15.9994, hcp: 3,par: 3,},
  {holeNumber: 9, blank:'', score: 8, yardage: 18.9984, hcp: 3,par: 4,},
  {holeNumber: 10, blank:'', score: 5, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 11, blank:'', score: 5, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 12, blank:'', score: 4, yardage: 20.1797, hcp: 3,par: 2,},
  {holeNumber: 13, blank:'', score: 3, yardage: 20.1797, hcp: 3,par: 4,},
  {holeNumber: 14, blank:'', score: 6, yardage: 20.1797, hcp: 3,par: 3,},
  {holeNumber: 15, blank:'', score: 7, yardage: 20.1797, hcp: 3,par: 3,},
  {holeNumber: 16, blank:'', score: 8, yardage: 20.1797, hcp: 3,par: 5,},
  {holeNumber: 17, blank:'', score: 7, yardage: 20.1797, hcp: 3,par: 4,},
  {holeNumber: 18, blank:'', score: 4, yardage: 20.1797, hcp: 3,par: 3,},
];



@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  displayedColumns: string[] = ['holeNumber',];
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
}
