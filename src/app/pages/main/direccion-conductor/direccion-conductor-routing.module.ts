import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionConductorPage } from './direccion-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionConductorPageRoutingModule {}
