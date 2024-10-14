import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registro-vehiculo',
    loadChildren: () => import('./registro-vehiculo/registro-vehiculo.module').then( m => m.RegistroVehiculoPageModule)
  },
  {
    path: 'buscar-vehiculo',
    loadChildren: () => import('./buscar-vehiculo/buscar-vehiculo.module').then( m => m.BuscarVehiculoPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
