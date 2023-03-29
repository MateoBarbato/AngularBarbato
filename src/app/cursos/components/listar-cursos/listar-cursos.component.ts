import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import {isEmpty, map, Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { selectorCargandoCursos, selectorCursosCargados } from '../../state/curso-state.selectors';
import { cargarCursoState, cursosCargados, eliminarCurso } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionAll, selectUsuarioAdmin } from 'src/app/auth/state/auth.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit,AfterViewInit, OnDestroy {
  filtro!:string
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin','acciones' ]
  dataSource!: MatTableDataSource<Curso>
  cursos$!:Observable<Curso[]>;
  subscription!:Subscription;
  subscriptionAdmin!:Subscription;
  cargando$!:Observable<Boolean>;
  usuarioAdmin$!:Observable<boolean|undefined>

  constructor(
    private cursosService : CursosService,
    private router: Router,
    private storeAuth: Store<AuthState>,
    private store: Store<CursoState>,
    private snackBar : MatSnackBar
  ){
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.storeAuth.select(selectSesionAll).subscribe((sesion:Sesion)=>{
        if(!sesion.sesionActiva){
          this.router.navigate(['auth/login'])
        }
      })
    // ADMIN REQUEST VALUE
    this.usuarioAdmin$= this.storeAuth.select(selectUsuarioAdmin);
    this.subscriptionAdmin = this.usuarioAdmin$.subscribe()


    this.cargando$ = this.store.select(selectorCargandoCursos)
    this.store.dispatch(cargarCursoState());
    this.cursos$  = this.store.select(selectorCursosCargados);
    this.subscription = this.cursos$.subscribe((cursos)=>{
        this.dataSource.data = cursos
    })

  }

  eliminarCurso(curso: Curso) {
      this.store.dispatch(eliminarCurso({curso:curso}))

  }

  editarCurso(curso:Curso) {
      this.router.navigate(['cursos/editar/' , curso])
  }

  detalleCurso(curso:Curso){
    this.router.navigate(['cursos/detalle/' , curso])
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if(this.subscriptionAdmin){
      this.subscriptionAdmin.unsubscribe();
    }
  }


}

