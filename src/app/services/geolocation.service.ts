import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  constructor() { }
// Obtener posición actual
async getCurrentPosition(): Promise<Position> {
  // Primero verificamos los permisos
  const permissionStatus = await Geolocation.checkPermissions();
  
  if (permissionStatus.location !== 'granted') {
    // Si no tenemos permisos, los solicitamos
    await Geolocation.requestPermissions();
  }

  // Obtener las coordenadas
  return await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 10000
  });
}

// Observar cambios en la posición
async watchPosition(callback: (position: Position | null, err?: any) => void) {
  // Verificar permisos primero
  const permissionStatus = await Geolocation.checkPermissions();
  
  if (permissionStatus.location !== 'granted') {
    await Geolocation.requestPermissions();
  }

  // Iniciar el watch
  const watchId = await Geolocation.watchPosition(
    { 
      enableHighAccuracy: true,
      timeout: 10000
    },
    callback
  );

  return watchId;
}

// Detener la observación
async stopWatching(watchId: string) {
  await Geolocation.clearWatch({ id: watchId });
}
}

