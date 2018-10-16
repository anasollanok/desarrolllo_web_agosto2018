import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id/servicio', component: ClientDetailComponent },
  { path: '', component: ClientListComponent },
  { path:'crearCliente', component: ClienteFormComponent}


];

export const RoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, { enableTracing: true }  );

