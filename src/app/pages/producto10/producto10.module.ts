import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto10PageRoutingModule } from './producto10-routing.module';

import { Producto10Page } from './producto10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto10PageRoutingModule
  ],
  declarations: [Producto10Page]
})
export class Producto10PageModule {}
