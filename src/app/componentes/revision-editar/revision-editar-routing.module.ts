import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionEditarComponent } from './revision-editar.component';

const routes: Routes = [
  {
    path: '', component: RevisionEditarComponent
  },
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionEditarRoutingModule { }
