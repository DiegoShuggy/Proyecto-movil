import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCategoriasPage } from './gestion-categorias.page';

describe('GestionCategoriasPage', () => {
  let component: GestionCategoriasPage;
  let fixture: ComponentFixture<GestionCategoriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
