import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forecast } from './forecast';

const routes: Routes = [{ path: '', component: Forecast }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
