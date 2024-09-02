import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto14PageRoutingModule } from './producto14-routing.module';

import { Producto14Page } from './producto14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto14PageRoutingModule
  ],
  declarations: [Producto14Page]
})
export class Producto14PageModule {}
