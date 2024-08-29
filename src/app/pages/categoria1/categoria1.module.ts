import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Categoria1PageRoutingModule } from './categoria1-routing.module';
import { Categoria1Page } from './categoria1.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Categoria1PageRoutingModule
  ],
  declarations: [Categoria1Page]
})
export class Categoria1PageModule {}
