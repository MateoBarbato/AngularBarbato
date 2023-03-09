import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursosComponent } from './listar-cursos.component';

describe('Pruebas de Listas-cursos-component', () => {
  let component: ListarCursosComponent;
  let fixture: ComponentFixture<ListarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
