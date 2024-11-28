import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MapDireccionConductorComponent } from './components/map-direccion-conductor/map-direccion-conductor.component';
import { RutaAddUpdateComponent } from './components/ruta-add-update/ruta-add-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule,
    MapDireccionConductorComponent,
    
  ],
  declarations: [MainPage, RutaAddUpdateComponent]
})
export class MainPageModule {}
