import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsRoutes } from './products/products.routes';
import { homeRoutes } from './home/home.routes';
import { NetworkComponent } from './network/network.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/index',
    pathMatch: 'full'
  },
  {
    path: 'home/network',
    component: NetworkComponent
  },
  ...productsRoutes,
  ...homeRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
