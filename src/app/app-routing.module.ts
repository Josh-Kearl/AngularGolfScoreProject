import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createGame', component: CreateGameComponent},
  { path: 'scorecard', component: ScorecardComponent },
]

@NgModule({
  imports:  [ 
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]


})
export class AppRoutingModule { }
