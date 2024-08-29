import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Categoria2Page } from './categoria2.page';

describe('Categoria2Page', () => {
  let component: Categoria2Page;
  let fixture: ComponentFixture<Categoria2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
