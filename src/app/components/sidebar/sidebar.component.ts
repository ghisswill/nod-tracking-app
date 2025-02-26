import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SubMenu } from '../../shared/models/sub-menu.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  helpCenterChildren: SubMenu[] = [];
  reportCenterChildren: SubMenu[] = [];

  ngOnInit(): void {
    this.reportCenterChildren = [
      {icon: "", label: "ACC Report"},
      {icon: "", label: "Historical Data Report"},
      {icon: "", label: "Query Data by speed"},
      {icon: "", label: "Running Statement"},
      {icon: "", label: "Daily Data Stat. Report"},
      {icon: "", label: "Trip Report"},
      {icon: "", label: "Advanded Trip Report"},
      {icon: "", label: "Fuel consumption chart"},
      {icon: "", label: "Advanded Fuel consumption chart"},
      {icon: "", label: "Speed Chart"},
      {icon: "", label: "All Alarm Report"},
      {icon: "", label: "Urgent Alarm Report"},
      {icon: "", label: "Overspeed Alarm Report"},
      {icon: "", label: "Iridium Data Report"},
      {icon: "", label: "Mileage Report"},
      {icon: "", label: "Historic Photos"},
      {icon: "", label: "Track Replay"},
      {icon: "", label: "Travel Summary"},
      {icon: "", label: "RFID Report"},
      {icon: "", label: "OBD Report"},
      {icon: "", label: "Error Code Report"},
      {icon: "", label: "Mileage Fuel Report"},
      {icon: "", label: "Speed Sift Report"},
      {icon: "", label: "Alarm Report"},
      {icon: "", label: "Vehicule Report"},
      {icon: "", label: "Vehicule Information"},
      {icon: "", label: "Terminal Installation Report"},
      {icon: "", label: "Technicains Report"},
      {icon: "", label: "Last Real Time Report"}
    ],
    this.helpCenterChildren = [
      {icon: "", label: "GOV Report"},
      {icon: "", label: "Online Repport"},
      {icon: "", label: "Offline Report"}
    ]
  }

}
