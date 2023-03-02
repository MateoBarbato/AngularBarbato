import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements AfterViewInit,OnDestroy {
  columnas : string[] = ['id','nombre', 'inscripcionAbierta', 'edad', 'sexo', 'validado', 'acciones' ]
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;
  alumnos!: Alumno[];
  table: any;


  constructor(
    private router:Router,
    private alumnosService: AlumnosService
  ){  
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  editarAlumno(id:number){
    // NECESITO OBTENER EL ID DE CADA ALUMNO , ALUMNOS TODAVIA NO TIENE ID (FIREBASE PROBABLY)
    this.alumnos =this.alumnosService.obtenerAlumnos()
    let alumno = this.alumnos.filter((alumno:Alumno)=>alumno.id == id+1)
    console.log(alumno)
    this.router.navigate(['alumnos/editar/' , alumno[0]])
  }

  eliminarAlumno(id:number){
    this.alumnosService.eliminarCurso(id+1)
    this.dataSource.paginator = this.paginator;
    this.router.navigate(['alumnos/listar'])
  }
  


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



