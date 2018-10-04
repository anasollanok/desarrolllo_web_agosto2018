import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import {ClienteService} from './cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
