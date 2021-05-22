import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarraComponent } from './components/barra/barra.component';
import { ListaComponent } from './components/lista/lista.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ListaComponent,
    DatosUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
