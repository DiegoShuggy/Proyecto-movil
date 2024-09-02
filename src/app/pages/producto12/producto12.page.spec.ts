import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producto12Page } from './producto12.page';

describe('Producto12Page', () => {
  let component: Producto12Page;
  let fixture: ComponentFixture<Producto12Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
