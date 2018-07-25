import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tee } from '../Interfaces/tee';

@Injectable({
  providedIn: 'root'
})
export class TeeService {

  courseId: number;

  activeTee = new BehaviorSubject<Tee>(null);
  private players = new BehaviorSubject<any>([]);
  player = this.players.asObservable();
  

  constructor(private http: HttpClient) { }


  getTees(courseId): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course` + courseId + `.txt`);
  }

  selectPlayer(player){
      this.players.next(player);
    }
  }
