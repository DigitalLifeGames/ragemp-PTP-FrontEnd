import { Component, OnInit } from '@angular/core';
import { PTPService } from '../ptpservice/ptpservice.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  players: Player[] = [];

  constructor(private service: PTPService) { }

  ngOnInit() {
    this.service.getAdmins().then(pl => pl.forEach(b=> this.players.push(b)));
    return;
  }

}
