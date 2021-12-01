import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.traerEquipo()
  }

  traerEquipo(){
    this.equipoService.traerEquipos().subscribe(data =>{
      console.log(data)
    })
  }
}
