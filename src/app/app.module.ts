import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { AgregarPartidoComponent } from './agregar-partido/agregar-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaEquiposComponent,
    ListaPartidosComponent,
    AgregarEquipoComponent,
    AgregarPartidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
