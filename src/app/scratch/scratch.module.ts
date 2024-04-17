import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScratchRoutingModule } from './scratch-routing.module';
import { ScratchComponent } from './scratch.component';


@NgModule({
  declarations: [
    ScratchComponent
  ],
  imports: [
    CommonModule,
    ScratchRoutingModule
  ]
})
export class ScratchModule { }
