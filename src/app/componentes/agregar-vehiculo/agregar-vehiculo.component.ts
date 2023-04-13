import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {
  ID: any
  formularioVehiculo: FormGroup;
  constructor(
    private activeRoute: ActivatedRoute,
    public formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.ID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.ID)
    this.formularioVehiculo = this.formulario.group({
      marca: [''],
      modelo: [''],
      anio: [''],
      placa: [''],
      color: [''],
      cliente_id: this.ID
    })
  }

  ngOnInit(): void {
  }
  enviarDatos(): any {
    console.log('me presionaste')
    console.log(this.formularioVehiculo.value);
    this.crudService.AgregarVehiculo(this.formularioVehiculo.value).subscribe(respuesta => {
      this.ruteador.navigateByUrl('/cliente/' + this.ID + '/listar-vehiculo');
    });
  }
}
