import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { onlinePlayer } from 'src/interfaces/onlinePlayer';
import { meta } from 'src/interfaces/meta';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

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
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  players: Player[] = [

  ];

  getPlayers: allPlayers;
  constructor(private http: HttpClient) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  ngOnInit(): void {
    // //Method for obtaining the total pages of data
    // this.http.get('https://www.balldontlie.io/api/v1/players?per_page=100').subscribe(pages => {
    //   this.getPlayers = pages;
    //   for (let i = 1; i <= this.getPlayers.meta.total_pages; i++) {
    //     this.http.get('https://www.balldontlie.io/api/v1/players?page=' + i).subscribe(Player => {
    //       this.getPlayers = Player;
    //       //console.log(this.getPlayers.data);
    //       for (let minPlayer of this.getPlayers.data)
    //         this.players.push({
    //           full_name: minPlayer.first_name + ' ' + minPlayer.last_name
    //         })
    //     });
    //   }
    //   console.log("jug", this.players.length);
    // }

    // );



  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
