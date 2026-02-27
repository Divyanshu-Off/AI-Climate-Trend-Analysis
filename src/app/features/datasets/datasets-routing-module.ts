import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datasets } from './datasets';

const routes: Routes = [{ path: '', component: Datasets }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetsRoutingModule { }
