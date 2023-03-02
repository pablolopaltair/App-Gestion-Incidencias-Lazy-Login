import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mostrar2RoutingModule } from './mostrar2-routing.module';
import { Mostrar2Component } from './mostrar2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mostrar2Component
  ],
  imports: [
    CommonModule,
    Mostrar2RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Mostrar2Module { }
