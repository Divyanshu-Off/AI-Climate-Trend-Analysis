import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@NgModule({
  declarations: [
    Header,
    Sidebar
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Header,
    Sidebar
  ]
})
export class CoreModule { }
