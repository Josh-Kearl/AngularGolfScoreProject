import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
