import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RumahPageRoutingModule } from './rumah-routing.module';

import { RumahPage } from './rumah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RumahPageRoutingModule
  ],
  declarations: [RumahPage]
})
export class RumahPageModule {}
