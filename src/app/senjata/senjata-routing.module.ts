import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenjataPage } from './senjata.page';

const routes: Routes = [
  {
    path: '',
    component: SenjataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenjataPageRoutingModule {}
