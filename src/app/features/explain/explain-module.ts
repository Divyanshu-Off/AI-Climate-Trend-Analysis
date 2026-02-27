import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplainRoutingModule } from './explain-routing-module';
import { Explain } from './explain';
import { FeatureImportance } from './components/feature-importance/feature-importance';
import { ConfidenceExplanation } from './components/confidence-explanation/confidence-explanation';


@NgModule({
  declarations: [
    Explain,
    FeatureImportance,
    ConfidenceExplanation
  ],
  imports: [
    CommonModule,
    ExplainRoutingModule
  ]
})
export class ExplainModule { }
