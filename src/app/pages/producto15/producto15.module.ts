import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto15PageRoutingModule } from './producto15-routing.module';

import { Producto15Page } from './producto15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto15PageRoutingModule
  ],
  declarations: [Producto15Page]
})
export class Producto15PageModule {}
