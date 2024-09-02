import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto12PageRoutingModule } from './producto12-routing.module';

import { Producto12Page } from './producto12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto12PageRoutingModule
  ],
  declarations: [Producto12Page]
})
export class Producto12PageModule {}
