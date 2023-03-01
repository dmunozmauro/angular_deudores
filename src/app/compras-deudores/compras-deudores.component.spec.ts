import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDeudoresComponent } from './compras-deudores.component';

describe('ComprasDeudoresComponent', () => {
  let component: ComprasDeudoresComponent;
  let fixture: ComponentFixture<ComprasDeudoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasDeudoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasDeudoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
