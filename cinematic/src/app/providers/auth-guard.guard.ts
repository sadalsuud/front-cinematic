import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from './api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private api: ApiService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(" - -> " + this.api.usuario);

    if (!this.api.usuario) {
      this.router.navigate(['/login']).then(r => {
        console.log("dentro de canActivate " + r);
      })
      return false
    }else{
      console.log("si hay usuario " + this.api.usuario);
    }
    return true;
  }

}
