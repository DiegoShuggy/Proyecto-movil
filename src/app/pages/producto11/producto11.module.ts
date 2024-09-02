import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto11PageRoutingModule } from './producto11-routing.module';

import { Producto11Page } from './producto11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto11PageRoutingModule
  ],
  declarations: [Producto11Page]
})
export class Producto11PageModule {}
