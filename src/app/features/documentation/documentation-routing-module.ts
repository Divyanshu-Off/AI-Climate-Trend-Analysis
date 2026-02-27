import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Documentation } from './documentation';

const routes: Routes = [{ path: '', component: Documentation }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
