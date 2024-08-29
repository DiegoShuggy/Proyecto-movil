import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Categoria2PageRoutingModule } from './categoria2-routing.module';

import { Categoria2Page } from './categoria2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Categoria2PageRoutingModule
  ],
  declarations: [Categoria2Page]
})
export class Categoria2PageModule {}
