import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenarioComparisonRoutingModule } from './scenario-comparison-routing-module';
import { ScenarioComparison } from './scenario-comparison';
import { SideBySideChart } from './components/side-by-side-chart/side-by-side-chart';
import { BaselineIndicator } from './components/baseline-indicator/baseline-indicator';


@NgModule({
  declarations: [
    ScenarioComparison,
    SideBySideChart,
    BaselineIndicator
  ],
  imports: [
    CommonModule,
    ScenarioComparisonRoutingModule
  ]
})
export class ScenarioComparisonModule { }
