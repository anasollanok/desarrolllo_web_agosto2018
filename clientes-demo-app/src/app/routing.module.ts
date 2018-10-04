import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id', component: ClientDetailComponent },
  { path: '', component: ClientListComponent },


];

export const RoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, { enableTracing: true }  );

