import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit,OnDestroy {
  columnas : string[] = ['nombre', 'inscripcionAbierta', 'edad', 'sexo', 'validado', 'acciones' ]
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;


  constructor(
    private alumnosService: AlumnosService
  ){  
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    console.log('Instanciando Data Source');
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnosService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      console.log('Agrego datos');
      this.dataSource.data = alumnos;
      console.log(this.dataSource.data);
      
    })
    console.log('ng on init ')
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}



