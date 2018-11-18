import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent }          from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PTPService } from './ptpservice/ptpservice.service';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
 
const appRoutes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
];
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    LeaderboardComponent
  ],
  providers: [PTPService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }