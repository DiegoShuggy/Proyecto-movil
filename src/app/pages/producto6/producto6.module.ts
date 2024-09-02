import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto6PageRoutingModule } from './producto6-routing.module';

import { Producto6Page } from './producto6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto6PageRoutingModule
  ],
  declarations: [Producto6Page]
})
export class Producto6PageModule {}
