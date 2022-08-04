import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {AuthGuardGuard} from "./providers/auth-guard.guard";
import {PeliculaComponent} from "./pelicula/pelicula.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {CineComponent} from "./cine/cine.component";
import {SalaComponent} from "./sala/sala.component";
import {CiudadComponent} from "./ciudad/ciudad.component";


const routes: Routes = [
  {path: 'inicio', component: AppComponent, canActivate: [AuthGuardGuard]},
  {path: 'cine', component: CineComponent, canActivate: [AuthGuardGuard]},
  {path: 'ciudad', component: CiudadComponent, canActivate: [AuthGuardGuard]},
  {path: 'sala', component: SalaComponent, canActivate: [AuthGuardGuard]},
  {path: 'pelicula', component: PeliculaComponent, canActivate: [AuthGuardGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuardGuard]},
  {path: '', component: MainComponent, canActivate: [AuthGuardGuard]},
  // {path: '**', redirectTo: "/"},
  {path: 'login', component: LoginComponent},
];

// la ruta de login siempre va de ultimas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
