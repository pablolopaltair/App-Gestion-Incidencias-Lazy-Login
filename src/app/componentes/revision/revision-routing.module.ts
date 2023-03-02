import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionComponent } from './revision.component';

const routes: Routes = [
  {
    path: '', component: RevisionComponent
  },
  
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionRoutingModule { }
