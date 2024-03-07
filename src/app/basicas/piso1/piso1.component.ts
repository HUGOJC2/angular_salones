import { Component, OnInit } from '@angular/core';
import { Salones } from 'src/app/model/salones';
import { SalonesService } from 'src/app/services/salones.service';

@Component({
  selector: 'app-pisob1',
  templateUrl: './piso1.component.html',
  styleUrls: ['./piso1.component.css']
})

export class PisoB1Component implements OnInit{
  stateOptions: any[] = [
    { label: 'Desocupado', value: 'OFF' },
    { label: 'Ocupado', value: 'ON' }
  ];

  salones: Salones[] = [];

  constructor (private salonesService: SalonesService) {}

  ngOnInit(): void {
    this.salonesService.obtenerSalonesPorEdificioYPiso(1, 1).subscribe(salones => {
        this.salones = salones;
        // Aquí puedes hacer algo con los salones obtenidos
      },
      error => {
        console.error('Error al obtener los salones', error);
        // Maneja el error según tus necesidades
      }
    );
  }
  
}
