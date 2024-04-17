import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }, { path: 'scratch', loadChildren: () => import('./scratch/scratch.module').then(m => m.ScratchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
