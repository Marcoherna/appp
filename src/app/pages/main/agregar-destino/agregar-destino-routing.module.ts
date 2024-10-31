import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarDestinoPage } from './agregar-destino.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarDestinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarDestinoPageRoutingModule {}
