import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing-module';
import { Forecast } from './forecast';
import { ForecastChart } from './components/forecast-chart/forecast-chart';
import { ConfidenceBand } from './components/confidence-band/confidence-band';
import { ModelMetrics } from './components/model-metrics/model-metrics';
import { ExplainForecast } from './components/explain-forecast/explain-forecast';


@NgModule({
  declarations: [
    Forecast,
    ForecastChart,
    ConfidenceBand,
    ModelMetrics,
    ExplainForecast
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule { }
