import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliesRoutingModule } from './anomalies-routing-module';
import { Anomalies } from './anomalies';
import { AnomalyChart } from './components/anomaly-chart/anomaly-chart';
import { AlertPanel } from './components/alert-panel/alert-panel';
import { BaselineComparison } from './components/baseline-comparison/baseline-comparison';


@NgModule({
  declarations: [
    Anomalies,
    AnomalyChart,
    AlertPanel,
    BaselineComparison
  ],
  imports: [
    CommonModule,
    AnomaliesRoutingModule
  ]
})
export class AnomaliesModule { }
