import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Courses } from '../Interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  activeCourse = new BehaviorSubject<Courses>(null);

  private url: string = "https://uxcobra.com/golfapi/courses.txt";

  constructor(private http: HttpClient) {
    
   }

   getCourses(): Observable<any> {
     return this.http.get(this.url);
    }


}
