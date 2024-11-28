import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionConductorPageRoutingModule } from './direccion-conductor-routing.module';

import { DireccionConductorPage } from './direccion-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionConductorPageRoutingModule
  ],
  declarations: [DireccionConductorPage]
})
export class DireccionConductorPageModule {}
