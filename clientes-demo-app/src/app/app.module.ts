import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http'; //rest client call http rest service

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    EncabezadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
