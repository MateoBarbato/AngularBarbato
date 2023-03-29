import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {Observable, Subscription } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionAll, selectUsuarioActivo, selectUsuarioAdmin } from 'src/app/auth/state/auth.selectors';
import { cargarCursoState } from 'src/app/cursos/state/curso-state.actions';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { alumnosCargados, cargarAlumnoState, eliminarAlumnoState } from '../../state/alumnos-state.actions';
import { AlumnoState } from '../../state/alumnos-state.reducer';
import { selectorAlumnosCargados, selectorCargandoAlumnos } from '../../state/alumnos-state.selectors';
import { AlumnosService } from '../../services/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements AfterViewInit,OnDestroy {
  columnas : string[] = ['id','nombre', 'edad', 'sexo', 'validado', 'comision', 'acciones' ]
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion!: Subscription;
  alumnos$!: Observable<Alumno[]>;
  table: any;
  subscription!: Subscription;
  subscriptionEliminate!: Subscription;
  cargando$!:Observable<Boolean>
  usuarioAdmin$!:Observable<boolean | undefined>;
  constructor(
    private router:Router,
    // private alumnosService: AlumnosService,
    private authStore:Store<AuthState>,
    private store:Store<AlumnoState>,
    private snackBar:MatSnackBar,
  ){
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;




  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.store.select(selectSesionAll).subscribe((sesion:Sesion)=>{
      console.log('Estado de la sesion', sesion)
      if(!sesion.sesionActiva){
        this.router.navigate(['auth/login'])
      }
    })

    this.usuarioAdmin$ = this.authStore.select(selectUsuarioAdmin)
    this.cargando$ = this.store.select(selectorCargandoAlumnos);
    this.store.dispatch(cargarAlumnoState());
    this.alumnos$ = this.store.select(selectorAlumnosCargados);
    this.subscription = this.alumnos$.subscribe((alumnos)=>{
      console.log(alumnos)
      this.dataSource.data = alumnos
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


  editarAlumno(alumno:Alumno){
   console.log(alumno)
   this.router.navigate(['alumnos/editar/' , alumno])
  }

  detalleAlumno(alumno:Alumno){
    this.router.navigate(['alumnos/detalle', alumno])
  }

  eliminarAlumno(alumno:Alumno){
   this.snackBar.open(`${alumno.nombre} eliminado , ${alumno.id}`)
   this.store.dispatch(eliminarAlumnoState({alumno:alumno}))
 }


}



