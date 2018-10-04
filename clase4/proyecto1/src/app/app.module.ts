import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import { Componente2Component } from './componente2/componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    Componente2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
