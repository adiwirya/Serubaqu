import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BajuPageRoutingModule } from './baju-routing.module';

import { BajuPage } from './baju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BajuPageRoutingModule
  ],
  declarations: [BajuPage]
})
export class BajuPageModule {}
