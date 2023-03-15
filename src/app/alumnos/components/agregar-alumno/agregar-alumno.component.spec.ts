import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AlumnosModule } from '../../alumnos.module';
import { AlumnosService } from '../../services/alumnos.service';

import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ],
      imports:[AppModule,
        AlumnosModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers:[AlumnosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  afterAll(() => {
    fixture.destroy();
  });
});
