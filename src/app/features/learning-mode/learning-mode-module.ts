import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningModeRoutingModule } from './learning-mode-routing-module';
import { LearningMode } from './learning-mode';
import { PipelineDiagram } from './components/pipeline-diagram/pipeline-diagram';
import { RawVsCleanData } from './components/raw-vs-clean-data/raw-vs-clean-data';
import { TrainValidationSplit } from './components/train-validation-split/train-validation-split';
import { ModelArchitecture } from './components/model-architecture/model-architecture';
import { MetricsVisualization } from './components/metrics-visualization/metrics-visualization';


@NgModule({
  declarations: [
    LearningMode,
    PipelineDiagram,
    RawVsCleanData,
    TrainValidationSplit,
    ModelArchitecture,
    MetricsVisualization
  ],
  imports: [
    CommonModule,
    LearningModeRoutingModule
  ]
})
export class LearningModeModule { }
