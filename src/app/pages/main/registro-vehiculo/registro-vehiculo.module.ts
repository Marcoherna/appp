import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVehiculoPageRoutingModule } from './registro-vehiculo-routing.module';

import { RegistroVehiculoPage } from './registro-vehiculo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVehiculoPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroVehiculoPage]
})
export class RegistroVehiculoPageModule {}
