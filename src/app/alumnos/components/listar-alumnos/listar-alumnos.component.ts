import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements AfterViewInit,OnDestroy {
  columnas : string[] = ['nombre', 'inscripcionAbierta', 'edad', 'sexo', 'validado', 'acciones' ]
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;


  constructor(
    private alumnosService: AlumnosService
  ){  
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnosService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
    this.dataSource.data = alumnos;

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}


