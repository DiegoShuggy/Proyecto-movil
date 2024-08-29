import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto5PageRoutingModule } from './producto5-routing.module';

import { Producto5Page } from './producto5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto5PageRoutingModule
  ],
  declarations: [Producto5Page]
})
export class Producto5PageModule {}
