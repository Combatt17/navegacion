import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

   baseUrl= environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  iniciarSesion(dato:any) {
    return this.http.post(`${this.baseUrl}/api/usuarios/login`,dato,{headers: {'Content-Type': 'application/json'}}).pipe(
      tap((data:any) => {
        localStorage.setItem('hash',data.hash);
      }),
      map(res => res)
    )
  }

}
