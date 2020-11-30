import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenjataPageRoutingModule } from './senjata-routing.module';

import { SenjataPage } from './senjata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenjataPageRoutingModule
  ],
  declarations: [SenjataPage]
})
export class SenjataPageModule {}
