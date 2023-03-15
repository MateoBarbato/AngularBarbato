import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service: AlumnosService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AlumnosService]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
