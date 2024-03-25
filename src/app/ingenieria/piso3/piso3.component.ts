import { Component } from '@angular/core';
import { Salones } from 'src/app/model/salones';
import { SalonesService } from 'src/app/services/salones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-piso3',
  templateUrl: './piso3.component.html',
  styleUrls: ['./piso3.component.css']
})
export class PisoI3Component {
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
    this.salonesService.obtenerSalonesPorEdificioYPiso(1, 4).subscribe(data => {
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
