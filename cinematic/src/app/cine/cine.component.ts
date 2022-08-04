import {Component, OnInit} from '@angular/core';
import {CinematicService} from "../providers/cinematic.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  constructor(public cinematic: CinematicService) {
  }

  ngOnInit(): void {
    this.cinematic.get_cines();
    this.cinematic.get_ciudades();
  }

  guardar() {
    if (this.cinematic.form_cine.value["id"]) {
      // cuando voy a actualizar, es porque existe el id en el control del formulario
      this.cinematic.update_cine();
    } else {
      this.cinematic.add_cine();
    }
  }

  // confirm() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to perform this action?',
  //     accept: () => {
  //       //Actual logic to perform a confirmation
  //     }
  //   });
  // }

}
