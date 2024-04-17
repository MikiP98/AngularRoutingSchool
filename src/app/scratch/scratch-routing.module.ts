import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScratchComponent } from './scratch.component';
import { ChComponent } from './ch/ch.component';
import { EsComponent } from './es/es.component';

const routes: Routes = [
  { 
    path: '', 
    component: ScratchComponent,
    children: [
      {
        path: 'es', component: EsComponent, loadChildren: () => import('./es/es.module').then(m => m.EsModule) 
      },
      {
        path: 'ch', component: ChComponent, loadChildren: () => import('./ch/ch.module').then(m => m.ChModule) 
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScratchRoutingModule { }
