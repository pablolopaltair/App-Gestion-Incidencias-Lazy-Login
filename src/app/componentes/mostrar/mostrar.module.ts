import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarRoutingModule } from './mostrar-routing.module';
import { MostrarComponent } from './mostrar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MostrarComponent
  ],
  imports: [
    CommonModule,
    MostrarRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MostrarModule { }
