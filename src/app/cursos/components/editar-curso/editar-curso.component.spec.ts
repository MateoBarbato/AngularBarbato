import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { CursosModule } from '../../cursos.module';
import { CursosService } from '../../services/cursos.service';

import { EditarCursoComponent } from './editar-curso.component';

describe('EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoComponent ],
      imports:[AppModule,
        CursosModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
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
