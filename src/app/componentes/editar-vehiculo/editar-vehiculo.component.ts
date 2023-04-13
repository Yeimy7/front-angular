import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CrudService } from '../../servicio/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {
  formularioVehiculo: FormGroup;
  ID:any
  IDV:any
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario: FormBuilder,
    private ruteador:Router
  ) {
    this.ID=this.activeRoute.snapshot.paramMap.get('id');
    this.IDV=this.activeRoute.snapshot.paramMap.get('idv');
    console.log(this.ID)
    console.log(this.IDV)
    this.crudService.ObtenerVehiculo(this.IDV).subscribe(respuesta=>{
      this.formularioVehiculo.setValue({
        marca: respuesta?.results.marca,
        modelo: respuesta?.results.modelo,
        anio: respuesta?.results.anio,
        placa: respuesta?.results.placa,
        color: respuesta?.results.color,
        cliente_id:respuesta?.results.cliente_id
      })
    });
    this.formularioVehiculo = this.formulario.group({
      marca: [''],
      modelo: [''],
      anio: [''],
      placa: [''],
      color: [''],
      cliente_id:this.ID
    })
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.formularioVehiculo.value);
    this.crudService.EditarVehiculo(this.IDV, this.formularioVehiculo.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/cliente/'+this.ID+'/listar-vehiculo');
    });
  }
}
