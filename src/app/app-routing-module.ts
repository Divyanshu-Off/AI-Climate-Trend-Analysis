import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) }, { path: 'forecast', loadChildren: () => import('./features/forecast/forecast-module').then(m => m.ForecastModule) }, { path: 'anomalies', loadChildren: () => import('./features/anomalies/anomalies-module').then(m => m.AnomaliesModule) }, { path: 'learning-mode', loadChildren: () => import('./features/learning-mode/learning-mode-module').then(m => m.LearningModeModule) }, { path: 'scenario-comparison', loadChildren: () => import('./features/scenario-comparison/scenario-comparison-module').then(m => m.ScenarioComparisonModule) }, { path: 'datasets', loadChildren: () => import('./features/datasets/datasets-module').then(m => m.DatasetsModule) }, { path: 'models', loadChildren: () => import('./features/models/models-module').then(m => m.ModelsModule) }, { path: 'download', loadChildren: () => import('./features/download/download-module').then(m => m.DownloadModule) }, { path: 'explain', loadChildren: () => import('./features/explain/explain-module').then(m => m.ExplainModule) }, { path: 'about', loadChildren: () => import('./features/documentation/documentation-module').then(m => m.DocumentationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
