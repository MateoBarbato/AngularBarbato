import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Alumno } from 'src/app/models/alumno';
import { Sesion } from 'src/app/models/sesion';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements AfterViewInit,OnDestroy {
  columnas : string[] = ['id','nombre', 'edad', 'sexo', 'validado', 'acciones' ]
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;
  alumnos$!: Observable<Alumno[]>;
  alumnos!:Alumno[]
  table: any;
  subscription!: Subscription;
  subscriptionEliminate!: Subscription;


  constructor(
    private router:Router,
    private alumnosService: AlumnosService,
    private sesion:SesionService
  ){  
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  editarAlumno(id:number){
    console.log(id)
    console.log(this.alumnos[id])
    this.router.navigate(['alumnos/editar/' , this.alumnos[id]])
  }

  eliminarAlumno(id:number){
    let alumnoToEliminate = this.alumnos[id]
    this.subscriptionEliminate = this.alumnosService.eliminarAlumno(alumnoToEliminate).subscribe((alumno:Alumno)=>{
      alert(`${alumno.nombre} eliminado , ${alumno.id}`)
      this.alumnosService.obtenerAlumnosObservable().subscribe((alumnos:Alumno[])=>{
        // Reseteo la tabla y resteo la referencia de alumnos, para que pueda volver a agarrar el id en la misma posicion.
        this.dataSource.data = alumnos
        this.alumnos = alumnos
      });
  })
    // reseteo el paginador y vuelvo a actualizar el observable de alumnos$.
    // Recargo la pagina.
    this.dataSource.paginator = this.paginator;
    this.alumnos$ = this.alumnosService.obtenerAlumnosObservable();
    this.router.navigate(['alumnos/listar'])
  }
  


  ngOnInit(): void {
    this.sesion.obtenerSesion().subscribe((sesion:Sesion)=>{
      console.log('Estado de la sesion', sesion)
      if(!sesion.sesionActiva){
        this.router.navigate(['auth/login'])
      }
    })
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnos$ = this.alumnosService.obtenerAlumnosObservable()
    this.subscription = this.alumnos$.subscribe((alumnos)=>{
      this.dataSource.data = alumnos
      this.alumnos = alumnos
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if(this.subscriptionEliminate){
      this.subscriptionEliminate.unsubscribe();
    }
  }

}



