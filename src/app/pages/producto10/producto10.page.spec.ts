import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producto10Page } from './producto10.page';

describe('Producto10Page', () => {
  let component: Producto10Page;
  let fixture: ComponentFixture<Producto10Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
