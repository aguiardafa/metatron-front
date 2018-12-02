import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "app/usuario.service";
import { Usuario } from "app/usuario-list/usuario";

@Component({
  selector: 'met-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[]

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.findAll("", "Programador")
      .subscribe(response => this.usuarios = response)
  }

}
