import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Editar2Component } from './editar2.component';

const routes: Routes = [
  {
    path: '', component: Editar2Component
  },
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Editar2RoutingModule { }
