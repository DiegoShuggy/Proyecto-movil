import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producto4Page } from './producto4.page';

describe('Producto4Page', () => {
  let component: Producto4Page;
  let fixture: ComponentFixture<Producto4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
