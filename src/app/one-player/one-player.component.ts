import { Component, OnInit } from '@angular/core';

interface Player {
  first_name?: string;
  last_name?: string;
  full_name: string;
  id?: number;
}
@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.scss']
})
export class OnePlayerComponent implements OnInit {
  players: Player[] = [
    { full_name: 'player1', id: 1 },
    { full_name: 'player2', id: 2 },
    { full_name: 'player3', id: 3 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
