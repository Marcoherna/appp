import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from '@capacitor/geolocation';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-location',
  templateUrll: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
  currentPosition: Position | null = null;
  watchId: string | null = null;
  isTracking = false;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {}

  async getCurrentLocation() {
    try {
      this.currentPosition = await this.geolocationService.getCurrentPosition();
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  }

  async toggleLocationTracking() {
    if (!this.isTracking) {
      // Iniciar seguimiento
      this.watchId = await this.geolocationService.watchPosition((position, error) => {
        if (error) {
          console.error('Error en el seguimiento:', error);
          return;
        }
        this.currentPosition = position;
      });
      this.isTracking = true;
    } else {
      // Detener seguimiento
      if (this.watchId) {
        await this.geolocationService.stopWatching(this.watchId);
        this.watchId = null;
      }
      this.isTracking = false;
    }
  }

  ngOnDestroy() {
    // Asegurarnos de detener el seguimiento cuando el componente se destruye
    if (this.watchId) {
      this.geolocationService.stopWatching(this.watchId);
    }
  }
}
