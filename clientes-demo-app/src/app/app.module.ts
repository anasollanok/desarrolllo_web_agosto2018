import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
 //rest client call http rest service
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    EncabezadoComponent,
    FooterComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
