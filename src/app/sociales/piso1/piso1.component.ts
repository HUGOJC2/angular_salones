import { Component } from '@angular/core';
import { Salones } from 'src/app/model/salones';
import { SalonesService } from 'src/app/services/salones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-piso1',
  templateUrl: './piso1.component.html',
  styleUrls: ['./piso1.component.css']
})
export class PisoS1Component {
  stateOptions: any[] = [
    { label: 'Disponible', value: 'OFF' },
    { label: 'Ocupado', value: 'ON' }
  ];

  salones: Salones[] = [];

  constructor (private salonesService: SalonesService) {}

  ngOnInit(): void {
    this.obtenerSalones();
  }

  obtenerSalones(){
    this.salonesService.obtenerSalonesPorEdificioYPiso(3, 8).subscribe(data => {
      this.salones = data;
    },
    error => {
      console.error('Error al obtener los salones', error);
    }
  );
  }

  cambiarEstadoSalon(salon: Salones): void {
    const nuevoEstado = salon.estado !== undefined ? salon.estado : '';
    let estado = ''; 
    switch(nuevoEstado){
      case 'OFF':
        estado = 'Disponible';
      break;
      case 'ON':
        estado = 'Ocupado';
    }
    if (salon.id) {
      this.salonesService.actualizarEstadoSalon(salon.id, nuevoEstado).subscribe(
        () => {
          if(salon.laboratorio == 'SI'){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Actualizacion",
              text: "El '" + salon.nombre + "' ahora esta " + estado,
            });
          }
          else{
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Actualizacion",
              text: "El Salon '" + salon.nombre + "' ahora esta " + estado,
            });
          }
        },
        (error) => {
          console.error('Error al actualizar el estado del salón', error);
        }
      );
    }
  }
}
