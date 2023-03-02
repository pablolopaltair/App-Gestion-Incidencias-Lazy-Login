import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearRoutingModule } from './crear-routing.module';
import { CrearComponent } from './crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent
  ],
  imports: [
    CommonModule,
    CrearRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CrearModule { }
