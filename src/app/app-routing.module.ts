import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnePlayerComponent } from './one-player/one-player.component';
import { RandomComponent } from './random/random.component';
import { TwoPlayersComponent } from './two-players/two-players.component';


const routes: Routes = [
  { path: 'random', component: RandomComponent },
  { path: 'onePlayer', component: OnePlayerComponent },
  { path: 'twoPlayers', component: TwoPlayersComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
