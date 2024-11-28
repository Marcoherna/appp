import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { MenuController } from '@ionic/angular';
import { Ruta } from 'src/app/models/ruta.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { UtilsService } from 'src/app/services/utils.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { RutaAddUpdateComponent } from '../ruta-add-update/ruta-add-update.component';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
const apiKey = environment.googleMapsApiKey;

@Component({
  selector: 'app-map-direccion-conductor',
  templateUrl: './map-direccion-conductor.component.html',
  styleUrls: ['./map-direccion-conductor.component.scss'],
  standalone: true,
  imports: [ SharedModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class MapDireccionConductorComponent  implements OnInit {
  
  map: GoogleMap;
  transparency: boolean = false;
  loading: boolean = false;
  rutas: Ruta[] = [];
  lat: number;
  lng: number;
  utilSvc = inject(UtilsService)
  firebaseSvc = inject(FirebaseService)

  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuController.enable(false, 'menu-content');
    this.transparency = true;
    this.initMap();
  }

  ionViewDidLeave() {
    this.menuController.enable(true, 'menu-content');
    this.transparency = false;
    this.map?.destroy();
  }


  async initMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      element: document.getElementById('map'),
      apiKey: apiKey,
      config: {
        disableDefaultUI: true,
        center: {
          lat: -33.51603940691781,
          lng: -70.59815526008606,
        },
        zoom: 15,
      }
    });

    this.map.setOnMapClickListener( res => {
      console.log('setOnMapClickListener -> ', res);
      this.lat = res.latitude;
      this.lng = res.longitude;
      this.addUpdateRuta();
    });

    this.map.enableCurrentLocation(true);

    this.setMarker();


  }

  setMarker() {
    const marker : Marker = {
      coordinate: {
        lat: -33.51603940691781,
        lng: -70.59815526008606,
      }
    }
    this.map.addMarker(marker)
  }

  user(): User {
    return this.utilSvc.getFromLocalStorage('user');
  }

  async addUpdateRuta(ruta?:Ruta){
    let success = await this.utilSvc.presentModal({
      component: RutaAddUpdateComponent,
      cssClass: 'add-update-modal',
      componentProps: {ruta}
    })
    if(success) this.getRuta();
  }

  getRuta(){
    let path = `users/${this.user().uid}/rutas`;
    this.loading = true;

    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res:any) => {
        console.log(res);
        this.rutas = res;
        this.loading = false;
        sub.unsubscribe();
      }
    })
  }
  
}