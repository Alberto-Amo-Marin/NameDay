import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EeuuComponent } from './eeuu/eeuu.component';
import { FranceComponent } from './france/france.component';
import { HomeComponent } from './home/home.component';
import { SpainComponent } from './spain/spain.component';

const routes: Routes = [
  { path: 'spain', component: SpainComponent },
  { path: 'france', component: FranceComponent },
  { path: 'eeuu', component: EeuuComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
