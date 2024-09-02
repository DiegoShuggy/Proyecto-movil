import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto8PageRoutingModule } from './producto8-routing.module';

import { Producto8Page } from './producto8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto8PageRoutingModule
  ],
  declarations: [Producto8Page]
})
export class Producto8PageModule {}
