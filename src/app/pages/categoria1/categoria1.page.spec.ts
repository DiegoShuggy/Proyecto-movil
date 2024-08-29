import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categoria1Page } from './categoria1.page';

describe('Categoria1Page', () => {
  let component: Categoria1Page;
  let fixture: ComponentFixture<Categoria1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
