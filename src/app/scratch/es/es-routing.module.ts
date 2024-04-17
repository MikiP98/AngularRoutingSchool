import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsComponent } from './es.component';

const routes: Routes = [{ path: '', component: EsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsRoutingModule { }
