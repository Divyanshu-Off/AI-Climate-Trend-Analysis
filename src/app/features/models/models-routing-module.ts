import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Models } from './models';

const routes: Routes = [{ path: '', component: Models }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
