import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto13PageRoutingModule } from './producto13-routing.module';

import { Producto13Page } from './producto13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto13PageRoutingModule
  ],
  declarations: [Producto13Page]
})
export class Producto13PageModule {}
