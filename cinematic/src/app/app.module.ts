import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from './footer/footer.component';
import {MatMenuModule} from "@angular/material/menu";
import {CineComponent} from './cine/cine.component';
import {SalaComponent} from './sala/sala.component';
import {PeliculaComponent} from './pelicula/pelicula.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuardGuard} from "./providers/auth-guard.guard";
import {ApiService} from "./providers/api.service";
import {CinematicService} from "./providers/cinematic.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CiudadComponent } from './ciudad/ciudad.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MatSelectModule} from "@angular/material/select";
import { SillaComponent } from './silla/silla.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CineComponent,
    SalaComponent,
    PeliculaComponent,
    UsuarioComponent,
    LoginComponent,
    MainComponent,
    CiudadComponent,
    SillaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TableModule,
    ButtonModule,
    DialogModule,
    MatSelectModule,
  ],
  providers: [AuthGuardGuard, ApiService, CinematicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
