import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DireccionConductorPage } from './direccion-conductor.page';

describe('DireccionConductorPage', () => {
  let component: DireccionConductorPage;
  let fixture: ComponentFixture<DireccionConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
