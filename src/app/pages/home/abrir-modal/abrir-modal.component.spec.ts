import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirModalComponent } from './abrir-modal.component';

describe('AbrirModalComponent', () => {
  let component: AbrirModalComponent;
  let fixture: ComponentFixture<AbrirModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
