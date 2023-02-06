import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDeudorComponent } from './nuevo-deudor.component';

describe('NuevoDeudorComponent', () => {
  let component: NuevoDeudorComponent;
  let fixture: ComponentFixture<NuevoDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
