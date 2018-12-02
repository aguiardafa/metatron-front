import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from "app/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
