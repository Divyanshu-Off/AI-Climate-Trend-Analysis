import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningMode } from './learning-mode';

const routes: Routes = [{ path: '', component: LearningMode }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningModeRoutingModule { }
