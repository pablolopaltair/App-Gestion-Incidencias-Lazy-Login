import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionEditarRoutingModule } from './revision-editar-routing.module';
import { RevisionEditarComponent } from './revision-editar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RevisionEditarComponent
  ],
  imports: [
    CommonModule,
    RevisionEditarRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RevisionEditarModule { }
