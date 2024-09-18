import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarcPage } from './recuperarc.page';

describe('RecuperarcPage', () => {
  let component: RecuperarcPage;
  let fixture: ComponentFixture<RecuperarcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
