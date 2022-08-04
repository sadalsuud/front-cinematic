import {Component, OnInit} from '@angular/core';
import {CinematicService} from "../providers/cinematic.service";

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(public cinematic: CinematicService) {
  }

  ngOnInit(): void {
    this.cinematic.get_salas();
    this.cinematic.get_cines();
  }

  guardar() {
    if (this.cinematic.form_sala.value["id"]) {
      // cuando voy a actualizar, es porque existe el id en el control del formulario
      this.cinematic.update_sala();
    } else {
      this.cinematic.add_sala();
    }
  }
}
