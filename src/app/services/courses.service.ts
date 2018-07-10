import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

   }

   getCourses(): Observable<any>{
    return this.http.get(`https://uxcobra.com/golfapi/courses.txt`);
   }
}
