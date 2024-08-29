import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producto5Page } from './producto5.page';

describe('Producto5Page', () => {
  let component: Producto5Page;
  let fixture: ComponentFixture<Producto5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
