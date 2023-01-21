import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDialogoComponent } from './formulario-dialogo.component';

describe('FormularioDialogoComponent', () => {
  let component: FormularioDialogoComponent;
  let fixture: ComponentFixture<FormularioDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
