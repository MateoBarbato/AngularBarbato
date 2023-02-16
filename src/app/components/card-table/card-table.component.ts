import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import {map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit, OnDestroy {
  filtro!: string;
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin', ]
  dataSource!: MatTableDataSource<Curso>
  cursos!:Curso[];
  cursos$!:Observable<Curso[]>;
  subscription!:Subscription

  constructor(
    private cursosService : CursosService,
    // @Inject(token) private config:Configuracion
  ){
  }

  ngOnInit(): void {
    console.log('Instanciando Data Source');
    this.cursos$ = this.cursosService.obtenerCursosObservable()
    this.subscription = this.cursosService.obtenerCursosObservable().pipe(map(cursos=>cursos.filter((curso)=>curso.inscripcionAbierta == true))).subscribe((data)=>{
      this.cursos = data
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
