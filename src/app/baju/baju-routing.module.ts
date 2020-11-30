import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BajuPage } from './baju.page';

const routes: Routes = [
  {
    path: '',
    component: BajuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BajuPageRoutingModule {}
