import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AlumnosModule } from '../../alumnos.module';
import { AlumnosService } from '../../services/alumnos.service';

import { EditarAlumnoComponent } from './editar-alumno.component';

describe('EditarAlumnoComponent', () => {
  let component: EditarAlumnoComponent;
  let fixture: ComponentFixture<EditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoComponent ],
      imports:[AppModule,
        AlumnosModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers:[AlumnosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
