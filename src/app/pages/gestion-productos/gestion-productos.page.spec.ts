import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionProductosPage } from './gestion-productos.page';

describe('GestionProductosPage', () => {
  let component: GestionProductosPage;
  let fixture: ComponentFixture<GestionProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
