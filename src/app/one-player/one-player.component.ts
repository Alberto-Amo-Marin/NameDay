import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { onlinePlayer } from 'src/interfaces/onlinePlayer';
import { meta } from 'src/interfaces/meta';

interface Player {
  first_name?: string;
  last_name?: string;
  full_name: string;
  id?: number;
}

interface allPlayers {
  data?: onlinePlayer[],
  meta?: meta;
}

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.scss']
})
export class OnePlayerComponent implements OnInit {
  players: Player[] = [

  ];

  getPlayers: allPlayers;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.balldontlie.io/api/v1/players').subscribe(Player => {
      this.getPlayers = Player;
      //console.log(this.getPlayers.data);
      for (let minPlayer of this.getPlayers.data)
        this.players.push({
          full_name: minPlayer.first_name + ' ' + minPlayer.last_name
        })
    });
  }

}
