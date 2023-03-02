import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Editar2RoutingModule } from './editar2-routing.module';
import { Editar2Component } from './editar2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Editar2Component
  ],
  imports: [
    CommonModule,
    Editar2RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Editar2Module { }
