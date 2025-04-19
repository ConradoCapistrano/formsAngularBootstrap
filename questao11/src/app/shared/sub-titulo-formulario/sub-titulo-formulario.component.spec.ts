import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTituloFormularioComponent } from './sub-titulo-formulario.component';

describe('SubTituloFormularioComponent', () => {
  let component: SubTituloFormularioComponent;
  let fixture: ComponentFixture<SubTituloFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTituloFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubTituloFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
