import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosService } from '../../services/cursos.service';

import { EditarCursoComponent } from './editar-curso.component';

describe('EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoComponent ],
      providers:[CursosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
