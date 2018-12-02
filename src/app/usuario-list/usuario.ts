import { Cargo } from "app/usuario-list/Cargo";
import { Telefone } from "app/usuario-list/telefone";

export class Usuario {
    id: number
    nome: string
    cargo: Cargo
    telefone: Telefone
}