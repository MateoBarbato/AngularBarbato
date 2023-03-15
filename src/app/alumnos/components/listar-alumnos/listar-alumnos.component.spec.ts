import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AlumnosModule } from '../../alumnos.module';
import { AlumnosService } from '../../services/alumnos.service';

import { ListarAlumnosComponent } from './listar-alumnos.component';

describe('ListarAlumnosComponent', () => {
  let component: ListarAlumnosComponent;
  let fixture: ComponentFixture<ListarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlumnosComponent ],
      imports:[AppModule,
        AlumnosModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
      providers:[AlumnosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
