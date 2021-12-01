import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  baseUrl= environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  get headers(){
    return { headers: { 'Authorization' : this.getToken() }}
  }

  traerEquipos(){
    return this.http.get(`${this.baseUrl}/api/equipos`,this.headers)
  }
}
