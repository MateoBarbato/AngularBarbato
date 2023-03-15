import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { CursosModule } from '../../cursos.module';
import { CursosService } from '../../services/cursos.service';

import { ListarCursosComponent } from './listar-cursos.component';

describe('ListarCursosComponent', () => {
  let component: ListarCursosComponent;
  let fixture: ComponentFixture<ListarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosComponent ],
      imports:[AppModule,
        CursosModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])],
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
