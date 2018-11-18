

import { Component, OnInit } from '@angular/core';
import { PTPService } from '../ptpservice/ptpservice.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  board: Player[] = [];

  constructor(private service: PTPService) { }

  ngOnInit() {
    this.service.getLeaderboard().then(board => board.forEach(b=> this.board.push(b)));

    this.board.push({
      id: 1,
      logged: true,
      locked: true,
      admin: false,
      name: "wat",
      ip: "temp"
    });
    return;
  }

}
