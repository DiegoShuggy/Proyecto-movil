import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto3PageRoutingModule } from './producto3-routing.module';

import { Producto3Page } from './producto3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto3PageRoutingModule
  ],
  declarations: [Producto3Page]
})
export class Producto3PageModule {}
