import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScratchRoutingModule } from './scratch-routing.module';
import { ScratchComponent } from './scratch.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ScratchComponent
  ],
  imports: [
    CommonModule,
    ScratchRoutingModule,
    RouterModule
  ]
})
export class ScratchModule { }
