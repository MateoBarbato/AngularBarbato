import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AgregarCursoComponent } from './agregar-curso.component';

describe('AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('El formulario se mantiene cuando dejamos los campos requeridos vacios', ()=>{
    const formulario = component.formulario;
    const comision = formulario.controls["comision"];

    comision.setValue('45310');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario cambia a VALID cuando ingresamos el campo nombre', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];

    nombre.setValue('Angular');

    expect(nombre.valid).toBeTrue();
  });

  it('Los cursos se renderizan correctamente', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const comision = formulario.controls["comision"];
    const fechaInicio = formulario.controls["fechaInicio"];
    const fechaFin = formulario.controls["fechaFin"];
    const inscripcionAbierta = formulario.controls["inscripcionAbierta"];
    const profesor = formulario.controls["profesor"];
    const fechaPrueba = new Date();

    nombre.setValue('Angular');
    comision.setValue('76510');
    fechaInicio.setValue(fechaPrueba);
    fechaFin.setValue(fechaPrueba);
    inscripcionAbierta.setValue(true);
    profesor.setValue("Luciano");

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();

    fixture.detectChanges();

    const listaCursosRef = fixture.debugElement.query(By.css("#lista-cursos"));
    expect(listaCursosRef).toBeTruthy();
  })
});
