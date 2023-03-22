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
import { selectorCargandoCursos, selectorCursosCargados } from '../../curso-state.selectors';
import { cargarCursoState, cursosCargados } from '../../curso-state.actions';
import { CursoState } from '../../curso-state.reducer';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionAll } from 'src/app/auth/state/auth.selectors';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit,AfterViewInit, OnDestroy {
  filtro!:string
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin','acciones' ]
  dataSource!: MatTableDataSource<Curso>
  cursos!:Curso[];
  cursos$!:Observable<Curso[]>;
  subscription!:Subscription;
  subscriptionEliminate!:Subscription;
  cargando$!:Observable<Boolean>;

  constructor(
    private cursosService : CursosService,
    private router: Router,
    private storeAuth: Store<AuthState>,
    private store: Store<CursoState>,
  ){
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.storeAuth.select(selectSesionAll).subscribe((sesion:Sesion)=>{
        console.log('Estado de la sesion', sesion)
        if(!sesion.sesionActiva){
          this.router.navigate(['auth/login'])
        }
      })
    this.dataSource = new MatTableDataSource<Curso>();
    this.cargando$ = this.store.select(selectorCargandoCursos)

    this.store.dispatch(cargarCursoState());
    this.cursosService.obtenerCursosObservable().subscribe((cursos:Curso[])=>{
      this.store.dispatch(cursosCargados({cursos:cursos}))
    })
    this.cursos$  = this.store.select(selectorCursosCargados);
    this.subscription = this.cursos$.subscribe((cursos)=>{
        this.dataSource.data = cursos
    })

  }

  eliminarCurso(curso: Curso) {
      this.subscriptionEliminate = this.cursosService.eliminarCurso(curso).subscribe((curso:Curso)=>{
          alert(`${curso.nombre} eliminado`)
          this.cursos$ = this.cursosService.obtenerCursosObservable();
      })

  }

  editarCurso(curso:Curso) {
      this.router.navigate(['cursos/editar/' , curso])
  }



  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if(this.subscriptionEliminate){
      this.subscriptionEliminate.unsubscribe();
    }
  }


}

