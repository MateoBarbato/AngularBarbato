import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import {map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit, OnDestroy {
  filtro: string = ''
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin', ]
  dataSource!: MatTableDataSource<Curso>
  cursos!:Curso[];
  cursos$!:Observable<Curso[]>;
  subscription!:Subscription
  usuariosFiltrados!: Curso[];

  constructor(
    private cursosService : CursosService,
  ){
  }

  filterUser(filterTerm: string){
    if(this.cursos.length === 0 || filterTerm == ''){
      return this.cursos
    } else {
      return this.cursos.filter((curso) => {
        return curso.nombre.toLowerCase().includes(filterTerm.toLowerCase())
      })
    }

  }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursosObservable()
    // FILTRO PARA ELIMINAR LOS CURSOS QUE NO TENGAN LA INSCRIPCION ABIERTA
    this.subscription = this.cursosService.obtenerCursosObservable().pipe(map(cursos=>cursos.filter((curso)=>curso.inscripcionAbierta == true))).subscribe((dataFiltrada)=>{
      this.usuariosFiltrados = dataFiltrada
      console.log('Mis datos filtrados son estos:',this.usuariosFiltrados)
      // ACA ES DONDE TENGO EL PROBLEMA, INTENTO ASIGNARLOS A CURSOS$ PARA QUE ESTEN UNIDOS A LA SUBSCRIPCION PERO ME TIRA ERROR, INTENTE HACER UN NEXT ADENTRO Y NO LO LOGRE
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
