import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { TeeService } from '../services/tee.service';
import { Courses } from '../Interfaces/courses';
import { Tee } from '../Interfaces/tee'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  
  difficulty: Array<any> = [];
  courseData: Array<any> = [];
  courseId: Array<any> = [];
  selectedCourse: string;
  selectedTee: string;
  teeData: Array<any> = [];
  players = [];
  teeHoles: Array<any> = [];
  teesOnHole;
  


  constructor(private coursesService: CoursesService, private teeService: TeeService) {
    this.coursesService.getCourses().subscribe(result => {
      console.log(result.courses);
      console.log(result.courses[0].id);
      this.courseData = result.courses;
    });
   }

  ngOnInit() {
    this.teeService.player.subscribe(res => this.players = res);
    this.teeService.selectPlayer(this.players);
    
  }
  setActiveCourse(activeCourse) {
    this.coursesService.activeCourse.next(activeCourse);
    this.selectedCourse = activeCourse;
    this.courseId = activeCourse.id;
    this.getTeeData();
}
  getTeeData(){
    this.teeService.getTees(this.courseId).subscribe(result => {
      this.teesOnHole = result.data.holes[0].teeBoxes;
      console.log(this.teesOnHole);
      for(let i = 0; i < this.teesOnHole.length; i++) {
        this.difficulty = this.teesOnHole[i].teeType;
        console.log(this.difficulty);
      }
      this.teeData = result.data;
      this.teeHoles = result.data.holes;
    })
  }
  setActiveTee(activeTee){
    this.teeService.activeTee.next(activeTee);
    this.selectedTee = activeTee;
  }
}
