import { Component } from '@angular/core';
import { LeafletMapComponent } from "../leaflet-map/leaflet-map.component";

@Component({
  selector: 'app-bloc-maps',
  standalone: true,
  imports: [LeafletMapComponent],
  templateUrl: './bloc-maps.component.html',
  styleUrl: './bloc-maps.component.css'
})
export class BlocMapsComponent {

}
