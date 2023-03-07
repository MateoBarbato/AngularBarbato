import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import {map, Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit,AfterViewInit, OnDestroy {
  filtro: string = ''
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin','acciones' ]
  dataSource!: MatTableDataSource<Curso>
  cursos!:Curso[];
  cursos$!:Observable<Curso[]>;
  subscription!:Subscription;
  subscriptionEliminate!:Subscription;  

  constructor(
    private cursosService : CursosService,
    private router: Router,
    private sesion: SesionService
  ){
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  eliminarCurso(curso: Curso) {
      this.subscriptionEliminate = this.cursosService.eliminarCurso(curso).subscribe((curso:Curso)=>{
          alert(`${curso.nombre} eliminado`)
          this.cursos$ = this.cursosService.obtenerCursosObservable();
         
      })
  
  }
  
  editarCurso(curso:Curso) { 
      this.router.navigate(['cursos/editar/' , curso])
  }

  ngOnInit(): void {
    this.sesion.obtenerSesion().subscribe((sesion:Sesion)=>{
      console.log('Estado de la sesion', sesion)
      if(!sesion.sesionActiva){
        this.router.navigate(['auth/login'])
      }
    })
    this.dataSource = new MatTableDataSource<Curso>();
    this.cursos$ = this.cursosService.obtenerCursosObservable()
    this.subscription = this.cursos$.subscribe()

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

