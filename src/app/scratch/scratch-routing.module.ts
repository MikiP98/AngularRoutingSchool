import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScratchComponent } from './scratch.component';

const routes: Routes = [{ path: '', component: ScratchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScratchRoutingModule { }
