import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInicioComponent } from './auth-inicio.component';

describe('AuthInicioComponent', () => {
  let component: AuthInicioComponent;
  let fixture: ComponentFixture<AuthInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthInicioComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
