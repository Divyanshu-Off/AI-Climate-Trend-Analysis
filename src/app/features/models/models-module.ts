import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing-module';
import { Models } from './models';


@NgModule({
  declarations: [
    Models
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule
  ]
})
export class ModelsModule { }
