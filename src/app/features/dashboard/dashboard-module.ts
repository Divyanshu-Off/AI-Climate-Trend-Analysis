import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { ClimateSummaryCards } from './components/climate-summary-cards/climate-summary-cards';
import { TrendChart } from './components/trend-chart/trend-chart';
import { RegionSelector } from './components/region-selector/region-selector';


@NgModule({
  declarations: [
    Dashboard,
    ClimateSummaryCards,
    TrendChart,
    RegionSelector
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
