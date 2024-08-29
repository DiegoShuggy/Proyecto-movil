import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Categoria3PageRoutingModule } from './categoria3-routing.module';

import { Categoria3Page } from './categoria3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Categoria3PageRoutingModule
  ],
  declarations: [Categoria3Page]
})
export class Categoria3PageModule {}
