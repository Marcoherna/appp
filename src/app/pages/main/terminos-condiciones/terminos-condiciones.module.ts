import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosCondicionesPageRoutingModule } from './terminos-condiciones-routing.module';

import { TerminosCondicionesPage } from './terminos-condiciones.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosCondicionesPageRoutingModule,
    SharedModule
  ],
  declarations: [TerminosCondicionesPage]
})
export class TerminosCondicionesPageModule {}
