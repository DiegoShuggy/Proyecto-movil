import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto4PageRoutingModule } from './producto4-routing.module';

import { Producto4Page } from './producto4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto4PageRoutingModule
  ],
  declarations: [Producto4Page]
})
export class Producto4PageModule {}
