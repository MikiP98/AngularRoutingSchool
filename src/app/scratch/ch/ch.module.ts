import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChRoutingModule } from './ch-routing.module';
import { ChComponent } from './ch.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChComponent
  ],
  imports: [
    CommonModule,
    ChRoutingModule,
    RouterModule
  ]
})
export class ChModule { }
