import {Component, OnInit} from '@angular/core';
import {CinematicService} from "../providers/cinematic.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public cinematic: CinematicService) {
  }

  ngOnInit(): void {
  }

}
