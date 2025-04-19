import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFormularioComponent } from './botao-formulario.component';

describe('BotaoFormularioComponent', () => {
  let component: BotaoFormularioComponent;
  let fixture: ComponentFixture<BotaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
