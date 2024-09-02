import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto7PageRoutingModule } from './producto7-routing.module';

import { Producto7Page } from './producto7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto7PageRoutingModule
  ],
  declarations: [Producto7Page]
})
export class Producto7PageModule {}
