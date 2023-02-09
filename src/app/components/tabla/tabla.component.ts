import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit {
alumnos:Alumno[] = [
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Pedro',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        },
        {nombre:'Angel',
        apellido:'Perez',
        inscripcionAbierta:true,
        edad:21,
        sexo:'Hombre',
        validado:true
        }]
  columnas : string[] = ['nombre', 'inscripcionAbierta', 'edad', 'sexo', 'validado', 'acciones' ]
  dataSource = new MatTableDataSource<Alumno>(this.alumnos);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



