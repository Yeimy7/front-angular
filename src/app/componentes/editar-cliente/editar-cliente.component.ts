import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CrudService } from '../../servicio/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  formularioClientes: FormGroup;
  ID:any
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario: FormBuilder,
    private ruteador:Router
  ) { 
    this.ID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.ID)
    this.crudService.ObtenerCliente(this.ID).subscribe(respuesta=>{
      this.formularioClientes.setValue({
        nombre: respuesta?.results.nombre,
        paterno: respuesta?.results.paterno,
        materno: respuesta?.results.materno,
        tipoDoc: respuesta?.results.tipoDoc,
        docIdentidad: respuesta?.results.docIdentidad,
        fecNacimiento: respuesta?.results.fecNacimiento,
        genero: respuesta?.results.genero
      })
    });
    this.formularioClientes = this.formulario.group({
      nombre: [''],
      paterno: [''],
      materno: [''],
      tipoDoc: [''],
      docIdentidad: [''],
      fecNacimiento: [''],
      genero: ['']

    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.formularioClientes.value);
    this.crudService.EditarCliente(this.ID, this.formularioClientes.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-cliente');
    });
  }

}
