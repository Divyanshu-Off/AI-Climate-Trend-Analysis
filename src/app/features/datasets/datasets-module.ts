import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetsRoutingModule } from './datasets-routing-module';
import { Datasets } from './datasets';


@NgModule({
  declarations: [
    Datasets
  ],
  imports: [
    CommonModule,
    DatasetsRoutingModule
  ]
})
export class DatasetsModule { }
