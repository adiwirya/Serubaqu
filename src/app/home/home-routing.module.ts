import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'baju',
        children: [
          {
            path: '',
            loadChildren: () => import('./../baju/baju.module').then( m => m.BajuPageModule)
          }
        ]
      },
      {
        path: 'rumah',
        children: [
          {
            path: '',
            loadChildren: () => import('./../rumah/rumah.module').then( m => m.RumahPageModule)
          }
        ]
      },
      {
        path: 'senjata',
        children: [
          {
            path: '',
            loadChildren: () => import('./../senjata/senjata.module').then( m => m.SenjataPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/rumah' ,
        pathMatch: 'full'
      }
    ] 
  },
  {
    path: '',
    redirectTo: '/home/rumah' ,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
