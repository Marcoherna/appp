import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarDestinoPage } from './agregar-destino.page';

describe('AgregarDestinoPage', () => {
  let component: AgregarDestinoPage;
  let fixture: ComponentFixture<AgregarDestinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDestinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
