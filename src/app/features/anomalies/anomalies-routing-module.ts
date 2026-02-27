import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Anomalies } from './anomalies';

const routes: Routes = [{ path: '', component: Anomalies }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnomaliesRoutingModule { }
