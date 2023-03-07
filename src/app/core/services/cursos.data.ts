import { Curso } from "../../models/curso";

export const cursos = {
    obtenerCursos: () => {
        return [
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
    }
}