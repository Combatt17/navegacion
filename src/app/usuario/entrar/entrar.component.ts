import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  //formulario
  loginForm!: FormGroup;

  //FB, para construir el formulario
  constructor(private fb: FormBuilder, private serviceUsuario: UsuarioService) { }

  //Inicializar y contruir el fomulario
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      password: ['']
    })
  }

  entrar(){
    this.serviceUsuario.iniciarSesion(this.loginForm.value).subscribe(data => {
      console.log(data)
    })
  }

}
