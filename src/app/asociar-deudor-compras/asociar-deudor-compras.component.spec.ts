import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarDeudorComprasComponent } from './asociar-deudor-compras.component';

describe('AsociarDeudorComprasComponent', () => {
  let component: AsociarDeudorComprasComponent;
  let fixture: ComponentFixture<AsociarDeudorComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarDeudorComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarDeudorComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
