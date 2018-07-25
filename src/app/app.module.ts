import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { CoursesService } from './services/courses.service';
import { TeeService } from './services/tee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    LoginPageComponent,
    CreateGameComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Golf Project'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [CoursesService, TeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
