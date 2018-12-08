import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "app/usuario.service";
import { Usuario } from "app/usuario-list/usuario";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'met-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[]
  form: FormGroup

  constructor(private service: UsuarioService, 
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nomeUsuario: this.fb.control(''),
      nomeCargo: this.fb.control('')
    })
    this.findAll('', '')
  }

  findAll(nomeUsuario: string, nomeCargo: string){
    this.service.findAll(nomeUsuario, nomeCargo)
      .subscribe(response => this.usuarios = response)
  }

  filter(){
    this.findAll(this.form.get('nomeUsuario').value, this.form.get('nomeCargo').value)
  }
}
