import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  formulario_ciudad: FormGroup = this.fb.group({
      nombre: ['', Validators.required],
      codigo_postal: ['', Validators.required]
    }
  )

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
