import {Component} from '@angular/core';
import {ApiService} from "./providers/api.service";
import {CinematicService} from "./providers/cinematic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinematic';

  constructor(public api: ApiService, public cinematic: CinematicService) {
    this.cinematic.crear_controles()
  }
}
