import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarDestinoPageRoutingModule } from './agregar-destino-routing.module';

import { AgregarDestinoPage } from './agregar-destino.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarDestinoPageRoutingModule,
    SharedModule
  ],
  declarations: [AgregarDestinoPage]
})
export class AgregarDestinoPageModule {}
