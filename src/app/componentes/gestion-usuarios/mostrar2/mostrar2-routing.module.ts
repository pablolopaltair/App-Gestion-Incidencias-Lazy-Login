import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mostrar2Component } from './mostrar2.component';

const routes: Routes = [
  {
    path: '', component: Mostrar2Component
  },
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mostrar2RoutingModule { }
