import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComprasRealizadasComponent } from './ver-compras-realizadas.component';

describe('VerComprasRealizadasComponent', () => {
  let component: VerComprasRealizadasComponent;
  let fixture: ComponentFixture<VerComprasRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerComprasRealizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerComprasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
