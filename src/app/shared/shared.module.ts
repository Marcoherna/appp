import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

import { AddUpdateVehicleComponent } from './components/add-update-vehicle/add-update-vehicle.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    CustomInputComponent,
    LogoComponent,
    FooterComponent,
    AddUpdateVehicleComponent
    
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    ReactiveFormsModule,
    FooterComponent,
    AddUpdateVehicleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class SharedModule { }
