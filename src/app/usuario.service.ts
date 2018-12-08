import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Usuario } from "app/usuario-list/usuario";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findAll(nomeUsuario: string, nomeCargo: string): Observable<Usuario[]> { 
    return this.http.get<Usuario[]>(
      `http://localhost:8084/metatron-api/api/v1/usuarios/?nomeUsuario=${nomeUsuario}&nomeCargo=${nomeCargo}`)
  }

}
