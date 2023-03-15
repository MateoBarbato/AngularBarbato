import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosService } from '../../services/cursos.service';

import { ListarCursosComponent } from './listar-cursos.component';

describe('ListarCursosComponent', () => {
  let component: ListarCursosComponent;
  let fixture: ComponentFixture<ListarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosComponent ],
      providers:[CursosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
