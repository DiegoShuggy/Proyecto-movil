import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage {
  @ViewChild('map', { static: false }) mapRef!: ElementRef;

  map!: GoogleMap;  // Usamos '!' para indicar que será inicializada después

  constructor() {}

  async ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      element: this.mapRef.nativeElement,
      apiKey: 'AIzaSyDw1-dlE0P_kOEmrVCsWVMqerXEG2sKQWk',
      config: {
        center: {
          lat: -33.45694, // Latitud inicial (ejemplo: Santiago, Chile)
          lng: -70.64827, // Longitud inicial
        },
        zoom: 15, // Nivel de zoom inicial
      },
    });

    // Si quieres agregar un marcador en el mapa
    await this.map.addMarker({
      coordinate: {
        lat: -33.45694,
        lng: -70.64827,
      },
      title: 'Tu ubicación',
    });
  }
}
