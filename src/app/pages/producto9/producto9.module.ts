import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto9PageRoutingModule } from './producto9-routing.module';

import { Producto9Page } from './producto9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto9PageRoutingModule
  ],
  declarations: [Producto9Page]
})
export class Producto9PageModule {}
