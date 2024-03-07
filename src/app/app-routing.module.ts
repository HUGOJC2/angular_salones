import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PisoB1Component } from './basicas/piso1/piso1.component';
import { PisoB2Component } from './basicas/piso2/piso2.component';
import { PisoB3Component } from './basicas/piso3/piso3.component';
import { PisoI1Component } from './ingenieria/piso1/piso1.component';
import { PisoI2Component } from './ingenieria/piso2/piso2.component';
import { PisoI3Component } from './ingenieria/piso3/piso3.component';
import { PisoS1Component } from './sociales/piso1/piso1.component';
import { PisoS2Component } from './sociales/piso2/piso2.component';
import { PisoS3Component } from './sociales/piso3/piso3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  //Basicas
  { path: 'basicas/piso_1', component: PisoB1Component},
  { path: 'basicas/piso_2', component: PisoB2Component},
  { path: 'basicas/piso_3', component: PisoB3Component},
  //Ingenieria
  { path: 'ingenieria/piso_1', component: PisoI1Component},
  { path: 'ingenieria/piso_2', component: PisoI2Component},
  { path: 'ingenieria/piso_3', component: PisoI3Component},
  //Sociales
  { path: 'sociales/piso_1', component: PisoS1Component},
  { path: 'sociales/piso_2', component: PisoS2Component},
  { path: 'sociales/piso_3', component: PisoS3Component},

  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
