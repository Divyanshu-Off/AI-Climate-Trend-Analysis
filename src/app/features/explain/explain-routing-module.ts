import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Explain } from './explain';

const routes: Routes = [{ path: '', component: Explain }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplainRoutingModule { }
