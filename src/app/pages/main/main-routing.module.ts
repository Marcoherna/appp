import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'buscar-vehiculo',
        loadChildren: () => import('./buscar-vehiculo/buscar-vehiculo.module').then( m => m.BuscarVehiculoPageModule)
      },
      {
        path: 'pokemon',
        loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
      },
      {
        path: 'map-direccion-conductor',
        loadComponent: () => import('./components/map-direccion-conductor/map-direccion-conductor.component').then((m) => m.MapDireccionConductorComponent)
      },

    ]
  },
  {
    path: 'agregar-destino',
    loadChildren: () => import('./agregar-destino/agregar-destino.module').then( m => m.AgregarDestinoPageModule)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./terminos-condiciones/terminos-condiciones.module').then( m => m.TerminosCondicionesPageModule)
  },
  {
    path: 'direccion-conductor',
    loadChildren: () => import('./direccion-conductor/direccion-conductor.module').then( m => m.DireccionConductorPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
