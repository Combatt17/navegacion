import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { AgregarPartidoComponent } from './agregar-partido/agregar-partido.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:'',
    component: EntrarComponent,
    pathMatch:'full'
  },
  {
    path:'registrar',
    component: RegistrarComponent,
  },
  {
    path:'inicio',
    component: InicioComponent,
  },
  {
    path:'listaequipo',
    component: ListaEquiposComponent
  },
  {
    path:'listapartido',
    component: ListaPartidosComponent
  },
  {
    path:'agregarpartido',
    component: AgregarPartidoComponent
  },
  {
    path:'agregarequipo',
    component: AgregarEquipoComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
