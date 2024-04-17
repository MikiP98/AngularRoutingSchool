import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsRoutingModule } from './es-routing.module';
import { EsComponent } from './es.component';


@NgModule({
  declarations: [
    EsComponent
  ],
  imports: [
    CommonModule,
    EsRoutingModule
  ]
})
export class EsModule { }
