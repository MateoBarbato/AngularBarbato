import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent {

  filtro!: string;

  cursos:Curso[] = [
    {nombre:'Angular',
    comision:'49512',
    profesor:{
      nombre:'Abner',
      correo:"asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 0,31),
    fechaFin: new Date(2023,2,28)
    },
    {nombre:'Angular',
    comision:'614213',
    profesor:{
      nombre:'Abner',
      correo:"asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:false,
    fechaInicio: new Date(2023, 0,31),
    fechaFin: new Date(2023,2,28)
    },
    {nombre:'React',
    comision:'123123',
    profesor:{
      nombre:'Caro',
      correo:"a4123asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 6,31),
    fechaFin: new Date(2023,8,28)
    },
    {nombre:'React',
    comision:'123123',
    profesor:{
      nombre:'Caro',
      correo:"a4123asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 6,31),
    fechaFin: new Date(2023,8,28)
    },
  ]

  dataSource : MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)

  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin', ]
}
