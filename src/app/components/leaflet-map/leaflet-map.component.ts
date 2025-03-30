import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css'
})
export class LeafletMapComponent implements AfterViewInit {

  private map!: L.Map;
  // Définition des marqueurs avec leurs icônes et popup
  private locations = [
    { lat: 48.8566, lng: 2.3522, popup: 'Paris', icon: '../assets/icons/location.png' },
    { lat: 45.764, lng: 4.8357, popup: 'Lyon', icon: 'assets/icons/location.png' },
    { lat: 43.6045, lng: 1.4442, popup: 'Toulouse', icon: 'assets/icons/location.png' }
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  initMap(): void {
    this.map = L.map('map').setView([46.603354, 1.888334], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
    this.locations.forEach(location => {
      const customIcon = L.icon({
        iconUrl: location.icon,
        iconSize: [40, 40], // Taille de l'icône
        iconAnchor: [20, 40], // Point d'ancrage (centré sur la base)
        popupAnchor: [0, -40] // Position de la popup
      });

      L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(location.popup);
    });
  }
}
