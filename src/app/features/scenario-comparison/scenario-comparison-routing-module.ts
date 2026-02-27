import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioComparison } from './scenario-comparison';

const routes: Routes = [{ path: '', component: ScenarioComparison }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScenarioComparisonRoutingModule { }
