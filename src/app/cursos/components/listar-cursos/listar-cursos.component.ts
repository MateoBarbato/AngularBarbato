import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import {map, Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

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
  subscriptionUnfiltered!:Subscription;
  usuariosFiltrados!: Curso[];
  

  constructor(
    private cursosService : CursosService,
    private router: Router
  ){
  }

  filterUser(filterTerm: string){
    if(this.cursos.length === 0 || filterTerm == ''){
      return this.cursos
    } else {
      return this.cursos.filter((curso) => {
        return curso.nombre.toLowerCase().includes(filterTerm.toLowerCase())})
      }
    };

    @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Curso>();
    this.cursos$ = this.cursosService.obtenerCursosObservable()
    this.subscription = this.cursosService.obtenerCursosObservable().pipe(map(cursos=>cursos.filter((curso)=>curso.inscripcionAbierta == true))).subscribe((dataFiltrada)=>{
      this.usuariosFiltrados = dataFiltrada
    })
    this.subscriptionUnfiltered = this.cursosService.obtenerCursosObservable().subscribe((cursos:Curso[])=>{
      this.dataSource.data = cursos
    })

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionUnfiltered.unsubscribe();
  }

  eliminarCurso(curso:Curso) {
    this.cursosService.eliminarCurso(curso)
  }

  editarCurso(curso:Curso) { 
    this.router.navigate(['cursos/editar/' , curso])
  }
}

