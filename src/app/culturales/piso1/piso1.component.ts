import { Component, OnInit } from '@angular/core';
import { Salones } from 'src/app/model/salones';
import { SalonesService } from 'src/app/services/salones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pisoc1',
  templateUrl: './piso1.component.html',
  styleUrls: ['./piso1.component.css']
})

export class PisoC1Component implements OnInit{
  stateOptions: any[] = [
    { label: 'Desocupado', value: 'OFF' },
    { label: 'Ocupado', value: 'ON' }
  ];

  salones: Salones[] = [];

  constructor (private salonesService: SalonesService) {}

  ngOnInit(): void {
    this.obtenerSalones();
  }

  obtenerSalones(){
    this.salonesService.obtenerSalonesPorEdificioYPiso(1, 1).subscribe(salones => {
      this.salones = salones;
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
        estado = 'Desocupado';
      break;
      case 'ON':
        estado = 'Ocupado';
    }
    if (salon.id) {
      this.salonesService.actualizarEstadoSalon(salon.id, nuevoEstado).subscribe(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Actualizacion",
            text: "El Salon '" + salon.nombre + "' ahora esta " + estado,
          });
        },
        (error) => {
          console.error('Error al actualizar el estado del salón', error);
        }
      );
    }
  }
}
