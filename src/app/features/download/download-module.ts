import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing-module';
import { Download } from './download';
import { ExportCsv } from './components/export-csv/export-csv';
import { ExportPng } from './components/export-png/export-png';


@NgModule({
  declarations: [
    Download,
    ExportCsv,
    ExportPng
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule
  ]
})
export class DownloadModule { }
