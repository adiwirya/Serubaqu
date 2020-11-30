import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RumahPage } from './rumah.page';

const routes: Routes = [
  {
    path: '',
    component: RumahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RumahPageRoutingModule {}
