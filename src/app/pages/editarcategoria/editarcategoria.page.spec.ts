import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarcategoriaPage } from './editarcategoria.page';

describe('EditarcategoriaPage', () => {
  let component: EditarcategoriaPage;
  let fixture: ComponentFixture<EditarcategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
