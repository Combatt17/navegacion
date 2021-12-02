import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' // Cliente HTTP
import { ReactiveFormsModule } from '@angular/forms'; // Formularios reactivos


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { AgregarPartidoComponent } from './agregar-partido/agregar-partido.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaEquiposComponent,
    ListaPartidosComponent,
    AgregarEquipoComponent,
    AgregarPartidoComponent,
    EntrarComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //Para utilizar el formulario reactivo (FormGroup)
    HttpClientModule //Para utilizar el HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
