import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { SalonesService } from '../services/salones.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

export interface SalonResponse {
  piso: {
    id: number;
  };
  edificio: {
    id: number;
    nombre: string;
  };
  salones: {
    id: number;
    nombre: string;
    estado: string;
    laboratorio: string;
  }[];
  cantidadSalonesOFF: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private root: am5.Root | undefined;
  salonesLibres: SalonResponse[] = [];
  bandera1: boolean = false;
  bandera2: boolean = false;
  bandera3: boolean = false;
  constructor(private salonesService: SalonesService) {}
  
  ngOnInit() {
    this.crearGraficaPastel();
    this.obtenerSalones();
  }


  crearGraficaPastel() {
    this.salonesService.obtenerConteoEstados().subscribe(
      (conteo: { OFF: number; ON: number; }) => {
        let root = am5.Root.new("chartdiv"); // chartdiv es el id del div donde se renderizará la gráfica
        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          endAngle: 270,
        }));

        // Datos de ejemplo
        let data = [
          { category: "Ocupados", value: conteo.ON },
          { category: "Disponibles", value: conteo.OFF },
        ];

        let series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
          })
        );

        series.data.setAll(data);
        series.slices.template.setAll({
          tooltipText: "{category}: {value}",
        });

        this.root = root;
      },
      error => {
        console.error('Error al obtener el conteo de estados', error);
      }
      
    );

  }

  obtenerSalones() {
    this.salonesService.obtenerSalonesConEstadoOFF().subscribe(
      (data: SalonResponse[]) => {
        this.salonesLibres = data;
        this.salonesLibres.forEach((salon) => {
          if(salon.edificio.nombre == 'Culturales'){
            this.bandera1 = true;
          }
          if(salon.edificio.nombre == 'Ingenieria'){
            this.bandera2 = true;
          }
          if(salon.edificio.nombre == 'Sociales'){
            this.bandera3 = true;
          }
        });
      },
      (error) => {
        console.error('Error al obtener los salones:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

}
