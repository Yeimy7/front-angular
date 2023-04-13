import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CrudService } from '../../servicio/crud.service';
@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  ID:any
  Vehiculos: any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService: CrudService
  ) {
    this.ID=this.activeRoute.snapshot.paramMap.get('id');
    // console.log(this.ID)
  }

  ngOnInit(): void {
    this.crudService.ObtenerVehiculos(this.ID).subscribe(respuesta => {
      console.log(respuesta);
      this.Vehiculos = respuesta;
    })
  }

  borrarVehiculo(id: any, iControl: any) {
    console.log(id);
    console.log(iControl)
    if(window.confirm("Desea eliminar el vehiculo?")){
      this.crudService.EliminarVehiculo(id).subscribe(respuesta => {
        console.log(respuesta);
        this.Vehiculos=this.Vehiculos.splice(iControl, 1)
      });
    }
    
  }

}
