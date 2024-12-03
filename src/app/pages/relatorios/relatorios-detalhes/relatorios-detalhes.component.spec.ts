import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosDetalhesComponent } from './relatorios-detalhes.component';

describe('RelatoriosDetalhesComponent', () => {
  let component: RelatoriosDetalhesComponent;
  let fixture: ComponentFixture<RelatoriosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoriosDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
