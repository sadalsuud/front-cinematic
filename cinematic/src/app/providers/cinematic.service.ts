import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router"; // sirve para navegar entre componentes ("url/rutas")

@Injectable({
  providedIn: 'root'
})
export class CinematicService {

  lista_socios: any = []
  ver_formulario: boolean = false;
  verFormCine: boolean = false;
  ver_form_sala: boolean = false;
  form_usuario: FormGroup = new FormGroup({})
  form_login: FormGroup = new FormGroup({})
  form_cine: FormGroup = new FormGroup({})
  form_sala: FormGroup = new FormGroup({})
  ver_loader: boolean = false;
  ciudades: any = []
  cines: any = []
  salas: any = []


  // constructor(public api: ApiService, private fb: FormBuilder, private messageService: MessageService) {   }

  constructor(public api: ApiService, private fb: FormBuilder, private enrutador: Router) {
  }

  send_message(severity: string, summary: string, detail: string) {
    // this.messageService.add({severity: severity, summary: summary, detail: detail});
  }

  iniciar_sesion() {
    // le envio los datos del formulario de inicio de sesion con .vaalue
    this.api.login(this.form_login.value).subscribe(
      data => {
        if (data != undefined) {
          this.api.crear_header(data.token);
          this.api.usuario = data;
          this.enrutador.navigate(['']).then(r => {
            console.log("en la promesa de la ruta " + r);
          });
        }
      }
    )
  }

  crear_controles() {

    this.form_login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.form_usuario = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      puntos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    })

    this.form_cine = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      representante: ['', Validators.required],
      telefono: ['', Validators.required],
      web: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad_id: ['', Validators.required]
    })

    this.form_sala = this.fb.group({
      id: [''],
      numero: ['', Validators.required],
      total_sillas: ['', Validators.required],
      cine_id: ['', Validators.required]
    })

  }

  llenar_form_socio(socio: any) {
    this.form_usuario.patchValue({
      id: socio.id,
      username: socio.username,
      first_name: socio.first_name,
      last_name: socio.last_name,
      email: socio.email,
      password: socio.password,
      puntos: socio.puntos,
      direccion: socio.direccion,
      telefono: socio.telefono,
    })
  }

  llenar_form_cine(cine: any) {
    this.form_cine.patchValue({
      id: cine.id,
      nombre: cine.nombre,
      representante: cine.representante,
      telefono: cine.telefono,
      web: cine.web,
      direccion: cine.direccion,
      ciudad_id: cine.ciudad.id.toString()
    })
  }

  llenar_form_sala(sala: any) {
    this.form_sala.patchValue({
      id: sala.id,
      numero: sala.numero,
      total_sillas: sala.total_sillas,
      sala_id: sala.cine.id.toString()
    })
  }

  get_socios() {
    this.ver_loader = true
    this.api.get('usuario')
      .subscribe(
        data => {
          if (data != undefined) {
            this.lista_socios = data
          }
          this.ver_loader = false
        }
      )
  }

  add_cine() {
    this.api.add('cine', this.form_cine.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_cines();
            this.verFormCine = false
            this.form_cine.reset()
            this.send_message('success', 'Sistema', 'Se ha creado el cine correctamente');
          }
        }
      )
  }

  get_cines() {
    this.ver_loader = true
    this.api.get('cine')
      .subscribe(
        data => {
          if (data != undefined) {
            this.cines = data
          }
          this.ver_loader = false
        }
      )
  }

  update_cine() {
    this.api.update('cine', parseInt(this.form_cine.value['id']), this.form_cine.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_cines();
            this.verFormCine = false
            this.form_cine.reset()
            this.send_message('success', 'Sistema', 'Se ha actualizado el cine correctamente');
          }
        }
      )
  }

  get_ciudades() {
    this.ver_loader = true
    this.api.get('ciudad')
      .subscribe(
        data => {
          if (data != undefined) {
            this.ciudades = data
          }
          this.ver_loader = false
        }
      )
  }

  add_sala() {
    this.api.add('sala', this.form_sala.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_salas();
            this.verFormCine = false
            this.form_sala.reset()
            this.send_message('success', 'Sistema', 'Se ha creado la sala correctamente');
          }
        }
      )
  }

  get_salas() {
    this.ver_loader = true
    this.api.get('sala')
      .subscribe(
        data => {
          if (data != undefined) {
            this.salas = data
          }
          this.ver_loader = false
        }
      )
  }

  update_sala() {
    this.api.update('sala', parseInt(this.form_sala.value['id']), this.form_sala.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_salas();
            this.ver_form_sala = false
            this.form_sala.reset()
            this.send_message('success', 'Sistema', 'Se ha actualizado la sala correctamente');
          }
        }
      )
  }


  update_socio() {
    this.api.update('usuario', parseInt(this.form_usuario.value['id']), this.form_usuario.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_socios();
            this.ver_formulario = false
            this.form_usuario.reset()
            this.send_message('success', 'Sistema', 'Se ha actualizado el socio correctamente')
          }
        }
      )
  }

  add_socio() {
    this.api.add('usuario', this.form_usuario.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_socios();
            this.ver_formulario = false
            this.form_usuario.reset()
            this.send_message('success', 'Sistema', 'Se ha creado el socio correctamente')
          }
        }
      )
  }

  borrar_socio(socio: any) {
    this.api.delete('usuario', socio.id)
      .subscribe(
        data => {
          console.log('usuario eliminado')
          this.get_socios();
          this.send_message('success', 'Sistema', 'Se ha eliminado el socio correctamente')
        }
      )
  }


}
