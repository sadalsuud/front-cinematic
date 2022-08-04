import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public usuario = '';
  readonly base_url = 'http://127.0.0.1:8000'
  header_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers: this.header_login};
  header_token: any
  options_token: any

  // constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {   }
  constructor(private http: HttpClient, private router: Router) {   }

  login(data: any) {
    let url = `${this.base_url + '/token'}`;
    let credenciales = JSON.stringify(data)
    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()))
  }

  get(endpoint: string): Observable<any[]> {
    let url = `${this.base_url + '/' + endpoint + '/'}`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  add(endpoint: string, data: any) {
    let dJson = JSON.stringify(data);
    let url = `${this.base_url + '/' + endpoint + '/'}`;
    return this.http.post(url, dJson, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  update(endpoint: string, id: number, data: any) {
    let dJson = JSON.stringify(data);
    let url = `${this.base_url + '/' + endpoint + '/' + id + '/'}`;
    return this.http.patch(url, dJson, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  //DELETE
  delete(endpoint: string, id: number) {
    let url = `${this.base_url + '/' + endpoint + '/' + id + '/'}`;
    return this.http.delete(url, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  crear_header(token: string) {
    this.header_token = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    this.options_token = {headers: this.header_token};
  }

  logout() {
    this.usuario = ''
    this.router.navigate(['/login'])
  }

  sen_message(severity: string, summary: string, detail: string) {
    // this.messageService.add({severity: severity, summary: summary, detail: detail, sticky: true});
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      for (let item of Object.keys(error.error)) {
        this.sen_message('error', 'Sistema', item + ': ' + error.error[item])
      }
      return of(result as T);
    };
  }
}
